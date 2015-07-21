# Code session July 20th 2015
In order to run the angular app, run from the root folder:
```
  bower install
```

## Mission to accomplish:
*MUST*:
 - Create a basic "widget" to show a chart to the users with the percentage and total number of mailings (opened, clicked, failed, unsubscribed)

*SHOULD*:
 - Connect the "widget" to the backend to show real data

*COULD*:
 - Give to the "widget" the same style in the picture.
 - Make it responsive
 - Time to accomplish it: 4 pomodoros

### Resources:
 - github repository: https://github.com/smartpr/awesome-code-session
 - chart library: https://gionkunz.github.io/chartist-js/
 - pair programming tool for the session: https://madeye.io/

### Notes:
A mailing has one status which can be: "notsent", "sent", "failed", "unsubscribed", "opened", "clicked"
"notsent" mailings shouldn't be taking on count for this chart
