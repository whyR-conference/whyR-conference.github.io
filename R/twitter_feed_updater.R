# https://cran.r-project.org/web/packages/jsonlite/vignettes/json-apis.html#twitter
library(jsonlite)
#Create your own appication key at https://dev.twitter.com/apps
consumer_key = "EZRy5JzOH2QQmVAe9B4j2w";
consumer_secret = "OIDC4MdfZJ82nbwpZfoUO4WOLTYjoRhpHRAWj6JMec";

#Use basic auth
secret <- jsonlite::base64_enc(paste(consumer_key, consumer_secret, sep = ":"))
req <- httr::POST("https://api.twitter.com/oauth2/token",
  httr::add_headers(
    "Authorization" = paste("Basic", gsub("\n", "", secret)),
    "Content-Type" = "application/x-www-form-urlencoded;charset=UTF-8"
  ),
  body = "grant_type=client_credentials"
);

#Extract the access token
httr::stop_for_status(req, "authenticate with twitter")
token <- paste("Bearer", httr::content(req)$access_token)

#Actual API call
url <- "https://api.twitter.com/1.1/statuses/user_timeline.json?count=10&screen_name=whyRconf"
req <- httr::GET(url, httr::add_headers(Authorization = token))
json <- httr::content(req, as = "text")
tweets <- fromJSON(json)
substring(tweets$text, 1, 100)
