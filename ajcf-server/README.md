
# Handlers
These handlers are deployed on AWS Lambda
## `updateMembers`
Periodically calls HelloAsso API to check if there are new members. If so,
they are added to the database, to 2 mailing lists on SendInBlue (members & newsletter) and 
a welcome email is sent.

## `updateEvents`
Periodically calls HelloAsso API to check if there are new events. If so, the new events are
added to the database and participants are added to the event mailing list on SendInBlue.

NB: subscriptions to the newsletter via the website (www.lajcf.fr) are done using Zapier.

# TODO
- Instead of using the bulk API of HelloAsso, use the HelloAsso webhook to update members & events.
- Once Zapier has integrated HelloAsso to their apps, the two handlers might be replaced.