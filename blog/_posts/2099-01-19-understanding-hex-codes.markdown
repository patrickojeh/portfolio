---
layout: post
title: "Understanding hex codes"
date: 2023-01-18 20:49:26 +0100
categories: express.js netlify
---

For the longest time, i've used Netlify to host my static projects and Heroku for my Node applications - not until recently: Heroku [no longer] offers a free plan, and my debit card doesn't work on the service.

So, I explored alternatives like [Render]{:target="\_blank"} and [Cyclic]{:target="\_blank"}. I particularly liked Cyclic, because there are no 'inactivity delays' (your app does not sleep even when it doesn't receive any traffic), but the idea of managing both the static and server side configuration from one dashboard, was why i settled for Netlify.

### Creating a test project

You can't just push your express app to Netlify and have it deploy. It doesn't work that way.
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]: https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
[cyclic]: https://www.cyclic.sh/
[render]: https://render.com/
[no longer]: https://techcrunch.com/2022/08/25/heroku-announces-plans-to-eliminate-free-plans-blaming-fraud-and-abuse/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAANGiW7s9KSus9ZbYLMJMFGlXLbmr25R3G8E-XQUeQGXMLv2JNXie4THQk_YKo7wg-vCgeY41S0ha_iTElFzykMXLC_KA7thl-duAfdMo8q0aT24_ePo94UnISPCzUQqzxfQkCtJ2Z7wt14sDgyEU_emhz1Hp94AcVB79ABoSexVx
