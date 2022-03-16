Feature: Zoobook Systems - Validate all contact forms


  Scenario Outline: Go to the Zoobook Systems website
    Given user visits the Zoobook Systems website
    When verify user is taken to the Zoobook Systems homepage
    Then user navigates to the page '<page>'
    And verify page heading '<heading>' is displayed

    Examples:
      | page       | heading                                              |
      | Contact Us | To schedule a FREE Demo, tell us what your needs are |


  Scenario Outline: Fill up contact form
    And user inputs Organization '<organization>' in the form
    And user inputs Website '<website>' in the form
    And user inputs Quick Run Down '<quickRunDown>' in the form
    # And user inputs Deadline '<date>' in the form
    And user inputs Name '<name>' in the form
    And user inputs Email '<email>' in the form
    And user inputs Phone '<phone>' in the form
    And user inputs Reference '<reference>' in the form
    And user clicks the Submit button
    And verify success message '<message>' is displayed


    Examples:
      | organization  | website                               | quickRunDown  | date       | name        | email               | phone         | reference     | message                                       |
      | QA Automation | https://zoobooksystems.com/contact-us | QA Automation | 12/12/1912 | Gio Marquez | jhomarq13@gmail.com | 0123-123-1234 | QA Automation | Thank you for your enquiry. It has been sent. |
