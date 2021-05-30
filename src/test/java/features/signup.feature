@featuretag
Feature: Register a user for elearnup page

  @Regression @Smoke
  Scenario Outline: verify that the user is able to signup the user with relevant information
    Given user should be on the home page
    When user clicks on Sign up button
    And user enters the necessary information "<Firstname>","<Lastname>","<email>","<username>","<pass>","<confirmpass>"
    And user clicks on Register button
    Then confirmation message is displayed in the screen
    And user clicks on profile button in the top right corner
    Then user email is verified in the screen
    And user clicks on the Inbox button
    Then user is naviagated to the new Send Message screen
    And user enteres "<recepient>","<subject>"
    When user clicks on Send Message
    Then Acknowledgment message is sent to "<recepientname>"

    Examples: 
      | Firstname | Lastname | email   | username  |  | pass     | confirmpass | recepient | subject      | recepientname       |
      | abc       | xyz      | a@a.com | test492   |  | Test!@34 | Test!@34    | virat     | Subject text | virat kohli (virat) |
