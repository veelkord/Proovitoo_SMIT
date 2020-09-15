Feature: smoke tests for Imdb top 250 chart 

    
    @priority1
    Scenario: navigating to the list from header dropdown
        Given I choose the dropdown from header
        Then I should be redirected to the chart
    
    @priority1
    Scenario: filtering movies 
        Given I am on the chart page
        When I sort by given ratings to ascending
        Then the highest rating should be on the top
        
    @priority2    
    Scenario: SEO test - searching the chart from Bing 
        Given I am on Bing's search page
        When I am typing my search request on Bing
        Then I should see that the first Bing's result is something
 
    @priority2  @mobile 
    Scenario: Mobile test - navigating to the chart using Safari on mobile
        Given I am using mobile and navigating to the hamburger menu
        Then I should be redirected to chart mobile view
        