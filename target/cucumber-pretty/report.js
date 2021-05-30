$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("signup.feature");
formatter.feature({
  "line": 2,
  "name": "Register a user for elearnup page",
  "description": "",
  "id": "register-a-user-for-elearnup-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@featuretag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "verify that the user is able to signup the user with relevant information",
  "description": "",
  "id": "register-a-user-for-elearnup-page;verify-that-the-user-is-able-to-signup-the-user-with-relevant-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    },
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user should be on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters the necessary information \"\u003cFirstname\u003e\",\"\u003cLastname\u003e\",\"\u003cemail\u003e\",\"\u003cusername\u003e\",\"\u003cpass\u003e\",\"\u003cconfirmpass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "confirmation message is displayed in the screen",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on profile button in the top right corner",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user email is verified in the screen",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on the Inbox button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user is naviagated to the new Send Message screen",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user enteres \"\u003crecepient\u003e\",\"\u003csubject\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user clicks on Send Message",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Acknowledgment message is sent to \"\u003crecepientname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "register-a-user-for-elearnup-page;verify-that-the-user-is-able-to-signup-the-user-with-relevant-information;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "email",
        "username",
        "",
        "pass",
        "confirmpass",
        "recepient",
        "subject",
        "recepientname"
      ],
      "line": 20,
      "id": "register-a-user-for-elearnup-page;verify-that-the-user-is-able-to-signup-the-user-with-relevant-information;;1"
    },
    {
      "cells": [
        "abc",
        "xyz",
        "a@a.com",
        "test489",
        "",
        "Test!@34",
        "Test!@34",
        "virat",
        "Subject text",
        "virat kohli (virat)"
      ],
      "line": 21,
      "id": "register-a-user-for-elearnup-page;verify-that-the-user-is-able-to-signup-the-user-with-relevant-information;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2904522712,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verify that the user is able to signup the user with relevant information",
  "description": "",
  "id": "register-a-user-for-elearnup-page;verify-that-the-user-is-able-to-signup-the-user-with-relevant-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 1,
      "name": "@featuretag"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user should be on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters the necessary information \"abc\",\"xyz\",\"a@a.com\",\"test489\",\"Test!@34\",\"Test!@34\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "confirmation message is displayed in the screen",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on profile button in the top right corner",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user email is verified in the screen",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on the Inbox button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user is naviagated to the new Send Message screen",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user enteres \"virat\",\"Subject text\"",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user clicks on Send Message",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Acknowledgment message is sent to \"virat kohli (virat)\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_should_be_on_the_home_page()"
});
formatter.result({
  "duration": 3700004811,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_clicks_on_Sign_up_button()"
});
formatter.result({
  "duration": 4769295511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 39
    },
    {
      "val": "xyz",
      "offset": 45
    },
    {
      "val": "a@a.com",
      "offset": 51
    },
    {
      "val": "test489",
      "offset": 61
    },
    {
      "val": "Test!@34",
      "offset": 71
    },
    {
      "val": "Test!@34",
      "offset": 82
    }
  ],
  "location": "stepdefinition.user_enters_the_necessary_information(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 359873538,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 5045982293,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.confirmation_message_is_displayed_in_the_screen()"
});
formatter.result({
  "duration": 26312262,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_clicks_on_profile_button_in_the_top_right_corner()"
});
formatter.result({
  "duration": 49654315,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_email_is_verified_in_the_screen()"
});
formatter.result({
  "duration": 8171877,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_clicks_on_the_Inbox_button()"
});
formatter.result({
  "duration": 1981584318,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_is_naviagated_to_the_new_Send_Message_screen()"
});
formatter.result({
  "duration": 2104532582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "virat",
      "offset": 14
    },
    {
      "val": "Subject text",
      "offset": 22
    }
  ],
  "location": "stepdefinition.user_enteres(String,String)"
});
formatter.result({
  "duration": 4268501587,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_clicks_on_Send_Message()"
});
formatter.result({
  "duration": 1726409397,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "virat kohli (virat)",
      "offset": 35
    }
  ],
  "location": "stepdefinition.acknowledgment_message_is_sent_to(String)"
});
formatter.result({
  "duration": 19253523,
  "status": "passed"
});
formatter.after({
  "duration": 1192799057,
  "status": "passed"
});
});