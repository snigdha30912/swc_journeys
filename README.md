A community website which allows users to form communities to learn and share new skills. It allows users to save any blog read online and share among communities and recommends related content to users. A timeline feature in which users can keep track of their journey of the project or skill they started and share them with others. 


PROJECT BRIEF: 

SAVE URL:
Users can save any blog by providing the URL. A thumbnail feature is implemented which fetches the title name, image, short description, date and time and related tags using Beautiful Soup.

![image](https://user-images.githubusercontent.com/58564764/126083097-12a2f1ad-1f5c-4678-b1f3-e30d911a24c5.png)


TAGS:
For every blog that the user saves, we have provided a list of relatable tags. The tags are found from the blogs using Open Calais API which uses Natural Language processing to search relatable tags from the blog and the tag feature is implemented using Django’s Taggable Manager. 



DISCOVER SECTION:
In the discover section, the users can discover new content or blogs based on the ones that they have saved.  Based on the tags that the users have saved, it uses Google’s News API to suggest new content to the user.

FAVOURITES SECTION:
The users can save the blogs that they find more important than the rest or the ones that they frequently use in the favourites section.

TIMELINE FEATURE:
A timeline feature in which users can keep track of their journey of the project or skill they started and share them with others. Whenever a developer starts a new project, he/she searches for resources to study from and comes across many blogs. They can save the blogs and can also add them to the timeline to keep track of how and in what order the particular resources were accessed by the user.
These timelines can also be shared among various communities such that other users can also get to know about these resources and avail advantage from them.



![image](https://user-images.githubusercontent.com/58564764/126083790-cfe88753-78a2-4821-9656-1a0d17663d3a.png)






COMMUNITIES:
The users can form communities of their own or get added to existing communities so that similar minds come together and interact with each other and help each other by learning and sharing. Post and comment features have been implemented. There are features of chatting and upvote and asking doubts within communities. Timelines can also be shared within communities. Multiple communities can be joined for ex. There can be a community of React, ML, AI, Development etc.








CHROME EXTENSION AND CONTEXT MENU:
The website also has a chrome extension built using JavaScript using which the blogs are saved. Also, the chrome’s context menu is updated so that blog’s can also be saved using the right click option.





REST API:
We also have a Rest API for our website created using Django Rest Framework. This Rest API was used to build up our chrome extension.




