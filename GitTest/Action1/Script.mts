SystemUtil.Run "iexplore.exe", "www.google.com"
Browser("Google").Page("Google").WebEdit("Search").Set "test " @@ hightlight id_;_Browser("Google").Page("Google").WebEdit("Search")_;_script infofile_;_ZIP::ssf3.xml_;_
'Browser("Google").Page("Google").WebList("WebList").Select "news" @@ hightlight id_;_Browser("Google").Page("Google").WebList("WebList")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Google").Page("news - Google Search").Sync @@ hightlight id_;_Browser("Google").Page("news - Google Search")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Google").CloseAllTabs
