function mainTab(evt, tab)
{
    var i, mainTabs, mainTabsContent;
    
    // Remove actives.
    mainTabs = document.getElementsByClassName("mainTab");
    for (i = 0; i < mainTabs.length; i++)
        mainTabs[i].className = mainTabs[i].className.replace(" active", "")
    
    // Hide contents.
    mainTabsContent = document.getElementsByClassName("mainTabContent");
    for(i = 0; i < mainTabsContent.length; i++)
        mainTabsContent[i].style.display = "none";
    
    // Activate and show tab.
    evt.currentTarget.className += " active";
    document.getElementById(tab).style.display = "block";    
}

function magTab(evt, tab)
{
    var i, magTabs, magTabsContent;
    
    // Remove actives.
    magTabs = document.getElementsByClassName("magTab");
    for (i = 0; i < magTabs.length; i++)
        magTabs[i].className = magTabs[i].className.replace(" active", "")
    
    // Hide contents.
    magTabsContent = document.getElementsByClassName("magTabContent");
    for(i = 0; i < magTabsContent.length; i++)
        magTabsContent[i].style.display = "none";
    
    // Activate and show tab.
    evt.currentTarget.className += " active";
    document.getElementById(tab).style.display = "block";    
}

function infoTab(evt, tab)
{
    var i, infoTabs, infoTabsContent;
    
    // Remove actives.
    infoTabs = document.getElementsByClassName("infoTab");
    for (i = 0; i < infoTabs.length; i++)
        infoTabs[i].className = infoTabs[i].className.replace(" active", "")
    
    // Hide contents.
    infoTabsContent = document.getElementsByClassName("infoTabContent");
    for(i = 0; i < infoTabsContent.length; i++)
        infoTabsContent[i].style.display = "none";
    
    // Activate and show tab.
    evt.currentTarget.className += " active";
    document.getElementById(tab).style.display = "block";    
}

function usersTab(evt, tab)
{
    var i, usersTabs, usersTabsContent;
    
    // Remove actives.
    usersTabs = document.getElementsByClassName("usersTab");
    for (i = 0; i < usersTabs.length; i++)
        usersTabs[i].className = usersTabs[i].className.replace(" active", "")
    
    // Hide contents.
    usersTabsContent = document.getElementsByClassName("usersTabContent");
    for(i = 0; i < usersTabsContent.length; i++)
        usersTabsContent[i].style.display = "none";
    
    // Activate and show tab.
    evt.currentTarget.className += " active";
    document.getElementById(tab).style.display = "block";    
}

function clientsTab(evt, tab)
{
    var i, clientsTabs, clientsTabsContent;
    
    // Remove actives.
    clientsTabs = document.getElementsByClassName("clientsTab");
    for (i = 0; i < clientsTabs.length; i++)
        clientsTabs[i].className = clientsTabs[i].className.replace(" active", "")
    
    // Hide contents.
    clientsTabsContent = document.getElementsByClassName("clientsTabContent");
    for(i = 0; i < clientsTabsContent.length; i++)
        clientsTabsContent[i].style.display = "none";
    
    // Activate and show tab.
    evt.currentTarget.className += " active";
    document.getElementById(tab).style.display = "block";    
}

function siteTab(evt, tab)
{
    var i, siteTabs, siteTabsContent;
    
    // Remove actives.
    siteTabs = document.getElementsByClassName("siteTab");
    for (i = 0; i < siteTabs.length; i++)
        siteTabs[i].className = siteTabs[i].className.replace(" active", "")
    
    // Hide contents.
    siteTabsContent = document.getElementsByClassName("siteTabContent");
    for(i = 0; i < siteTabsContent.length; i++)
        siteTabsContent[i].style.display = "none";
    
    // Activate and show tab.
    evt.currentTarget.className += " active";
    document.getElementById(tab).style.display = "block";    
}

function recordTab(evt, tab)
{
    var i, recordTabs, recordTabsContent;
    
    // Remove actives.
    recordTabs = document.getElementsByClassName("recordTab");
    for (i = 0; i < recordTabs.length; i++)
        recordTabs[i].className = recordTabs[i].className.replace(" active", "")
    
    // Hide contents.
    recordTabsContent = document.getElementsByClassName("recordTabContent");
    for(i = 0; i < recordTabsContent.length; i++)
        recordTabsContent[i].style.display = "none";
    
    // Activate and show tab.
    evt.currentTarget.className += " active";
    document.getElementById(tab).style.display = "block";    
}

function contractsTab(evt, tab)
{
    var i, contractsTabs, contractsTabsContent;
    
    // Remove actives.
    contractsTabs = document.getElementsByClassName("contractsTab");
    for (i = 0; i < contractsTabs.length; i++)
        contractsTabs[i].className = contractsTabs[i].className.replace(" active", "")
    
    // Hide contents.
    contractsTabsContent = document.getElementsByClassName("contractsTabContent");
    for(i = 0; i < contractsTabsContent.length; i++)
        contractsTabsContent[i].style.display = "none";
    
    // Activate and show tab.
    evt.currentTarget.className += " active";
    document.getElementById(tab).style.display = "block";    
}