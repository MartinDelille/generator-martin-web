Feature: <%= appname %>
  Describe your feature here

  Scenario: Check application title
    Given I am going to the website "/"
    When I look at the title
    Then the title is "<%= appname %>"
