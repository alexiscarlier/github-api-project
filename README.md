## Why I chose to write this code

In my view, the bottleneck to answering the research question was having data in a form analysable by standard statistical approaches. Relevant data exists and is plentiful, but unfortunately the Github API doesn't present this data in a particularly helpful format. In particular, it doesn't directly allow analysis of aggregate behaviour of a user. My code addresses this.

## Outline of work

The challenge asked us to collect quantitative data regarding the behaviour of software engineers during the winter holidays (which I defined as weeks 51 and 52 of the year) vs other times of the year. An obvious place to look for this data is Github- the largest host of source code in the world. So I used the Github API to access some of this data. I decided to collect data regarding specific Github users.

I focussed on the design of my program, rather than actually collecting lots of data. My program is designed to collect repository data and aggregate them for a particular user. Specifically, it’s designed to collect the data here (https://developer.github.com/v3/repos/statistics/) for each of the repositories on a user's account.

There are three classes in my program. GithubUser collects the repository names of a user from an api request. RepoDataCollector uses the commit data of a specific repository from another api request into information on weekly commits during different periods for that repository. Finally, UserDataAggregator aggregates the repository data of a specific user. My tests for each of these classes should give you a better idea of how they function. Currently there are only prototype functions relating to commit data. Hopefully this serves as a proof of concept for my global architecture; additional prototype functions could be added to deal with other API data in a similar way.

My interface.js file indicates how my classes should interact with one another. Ideally however, you would be persisting the organised data to a database rather than just rendering it to an html file, so my interface should be read predominantly as showcase of how the classes interact. I didn’t persist to a DB because of time constraints. (A side note: I’d exceed the api request limit by the time I built the interface, so it might not be working properly).  

## What I would add going forward

With more time, it would be good to write code which deals with different data from the API request, along with code which stores the sorted data into a database. A further feature would be to allow the code to collect data for more than one user at a time. I don't think it's necessary to write more code than this to answer the research question.

Following the collection of this data, standard statistical/data science methods could be used to compare the behaviour of software engineers during the winter holidays and other times of the year.


### Running Tests

```
$ npm test
