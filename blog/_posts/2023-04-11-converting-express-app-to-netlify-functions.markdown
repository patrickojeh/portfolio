---
layout: post
title: "Converting Express apps to Netlify functions"
date: 2023-04-11 00:00:00 +0100
categories: express.js netlify hosting
---

I had recently created an api in Express, ready to deploy to Heroku but then realized that Heroku [no longer] offers a free plan. I tried my debit cards on the platform, and that didn't work for me either; which only meant one thing - I needed to host elsewhere.

So, I explored alternatives like [Render]{:target="\_blank"} and [Cyclic]{:target="\_blank"}. I particularly liked Cyclic, because there are no 'inactivity delays' (your app does not sleep even when it doesn't receive any traffic), but the idea of managing both the static and server side configuration from one dashboard, was why i settled for Netlify.

### Creating a test project

Having a project in Express would be helpful to follow along, so I'll go ahead and create a basic api here. If you already have a project set up, you can just [skip this section](#introducing-lambda-functions).

1. Create a package.json file using `npm init -y`

2. Install the necessary dependencies. For this example, that would be Express and Nodemon (I'm using Nodemon to watch for file changes) &mdash; `npm i express && npm i -D nodemon`

3. Modify the scripts property in your `package.json`. This is where Nodemon comes in handy &mdash;
{% highlight ruby %}
scripts: {
  "dev": "nodemon index.js"
}
{% endhighlight %}
{:start="4"}
4. Create an `index.js` file, which would contain our Express code
{% highlight ruby %}
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const users = [
  {
    "firstName": "Jane",
    "lastName": "Doe"
  },
  {
    "firstName": "John",
    "lastName": "Doe"
  }
]

app.get('/users', (req, res) => {
  res.json(JSON.stringify(users));
});
#=> listen for connections on port 4000
app.listen(port, () => console.log(`Listening on port ${port}`));
{% endhighlight %}
{:start="5"}
5. Finally, you would want to start our development server by using the command `npm run dev`  

<br/>
Now, making requests to the url (i.e. `http://localhost:4000/users`) should return our list of users.


### Introducing Lambda functions

Netlify Lambda functions are in summary, anonymous functions that are tied to a particular route.

You don't need to have Express installed to use a Lambda function, and you can as well get rid of our Nodemon dev dependency
`npm un express nodemon`

However, you do need to have the [Netlify cli](https://docs.netlify.com/cli/get-started){:target="\_blank"} installed, using the command  `npm i netlify-cli -g` to install globally.

For the syntax of a Lambda function, here's what that looks like
{% highlight ruby %}
module.exports.handler = (event, context, callback) => {
#=> our code here
}
{% endhighlight %}
In the code above, I'm using CommonJS syntax `module.exports` to export a `handler` function that receives 3 parameters. The first parameter `event` is an object containing information about the incoming request; The `context` parameter on the other hand is a read-only object pre-populated with AWS and Netlify-specific stuff; And finally, the `callback` parameter, which is how we tell Lambda what response to send back.

### The Netlify.toml file

This is a configuration file normally stored at the root level of your website's directory that contains instructions on how Netlify builds and deploys your site.

To ensure Netlify recognizes our Lambda function, you need to add one of those instructions in our `netlify.toml` file.

In your root directory, create a file called `netlify.toml` containing the following code

{% highlight ruby %}
[build]
  functions="/functions"
{% endhighlight %}

What this does is instruct Netlify, as part of our build command to find our Lambda functions in a directory called `functions`. If our directory name was `lambda` for example, then it would be `functions="/lambda"`

### Putting it all together

Now that the bits and pieces are out of the way, here's a walk-through of a quick setup.

1. Create a `netlify.toml` file at the root level
{% highlight ruby %}
[build]
  functions="/functions"
{% endhighlight %}
{:start="2"}
2. Create a folder called `functions`. Name must match the directory name specified in your `netlify.toml`
3. Inside your `functions` directory, create a file called `users.js`. This file contains code for our `users` endpoint. The functionality is pretty much the same as I had in the earlier Express code

{% highlight ruby %}
module.exports.handler = (event, context, callback) => {
  const users = [
    {
      "firstName": "Jane",
      "lastName": "Doe"
    },
    {
      "firstName": "John",
      "lastName": "Doe"
    }
  ];

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(users)
  });
}
{% endhighlight %}

Note that the `callback()` function is responsible for what to return as a response. In the former Express code above, this was `res.json()`.

{:start="4"}
4. Change the scripts property in your `package.json`
{% highlight ruby %}
scripts: {
  "dev": "netlify dev"
}
{% endhighlight %}

{:start="5"}
5. Run the command `npm run dev`. This lets Netlify load our Lambda functions and give us a server to preview our app.

<br/>
...and then finally, you can preview the api at `http://localhost:8888/.netlify/functions/users`

If you're interested in exploring the final code used in this project, you can find it on my [Github repository]. Feel free to fork or submit any issues you encounter.


[cyclic]: https://www.cyclic.sh/
[render]: https://render.com/
[no longer]: https://techcrunch.com/2022/08/25/heroku-announces-plans-to-eliminate-free-plans-blaming-fraud-and-abuse/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAANGiW7s9KSus9ZbYLMJMFGlXLbmr25R3G8E-XQUeQGXMLv2JNXie4THQk_YKo7wg-vCgeY41S0ha_iTElFzykMXLC_KA7thl-duAfdMo8q0aT24_ePo94UnISPCzUQqzxfQkCtJ2Z7wt14sDgyEU_emhz1Hp94AcVB79ABoSexVx
[Github repository]: https://github.com/patrickojeh/converting-express-to-netlify-code
