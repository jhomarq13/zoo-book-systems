Feature: Gage Mathers - Validate all contact forms - English locale


  Scenario: Go to the Gage Mathers website
    Given user visits the Gage Mathers website


  Scenario Outline: Sidebar - contact form
    Given user visits the Gage Mathers website
    When verify user is in the Gage Mathers homepage 'English'
    Then user clicks the email button in the side bar
    And user inputs Name '<name>' in the pop up contact form
    And user inputs Email '<email>' in the pop up contact form
    And user inputs Phone Number '<phone>' in the pop up contact form
    And user inputs message '<message>' in the pop up contact form
    And user ticks agree in the pop up contact form
    And user clicks the send button in the pop up contact form
    Then verify sent message 'Thank you for your message. It has been sent.' is displayed in the pop up contact form
    And user clicks the close button in the pop up contact form

    Examples:
      | page | button | name         | email               | phone       | message                                   |
      | home | email  | QA Chornenky | jhomarq13@gmail.com | 12312312312 | QA Chornenky automation in English locale |


  Scenario Outline: Homepage I've been injured WHAT SHOULD I DO? - contact form
    Given verify user is in the Gage Mathers homepage 'English'
    When user inputs Name '<name>' in homepage injured section contact form
    And user inputs Email '<email>' in homepage injured section contact form
    And user inputs Phone Number '<phone>' in homepage injured section contact form
    And user inputs message '<message>' in homepage injured section contact form
    And user ticks agree in homepage injured section contact form
    And user clicks the send button in homepage injured section contact form
    Then verify sent message 'Thank you for your message. It has been sent.' is displayed in homepage injured section contact form

    Examples:
      | name         | email               | phone       | message                                   |
      | QA Chornenky | jhomarq13@gmail.com | 12312312312 | QA Chornenky automation in English locale |


  Scenario Outline: Homepage How Can We Help? - contact form
    Given verify user is in the Gage Mathers homepage 'English'
    When user inputs Name '<name>' in homepage help section contact form
    And user inputs Email '<email>' in homepage help section contact form
    And user inputs Phone Number '<phone>' in homepage help section contact form
    And user selects picklist value '<select>' in homepage injured section contact form
    And user ticks agree in homepage help section contact form
    And user clicks the send button in homepage help section contact form
    Then verify sent message 'Thank you for your message. It has been sent.' is displayed in homepage help section contact form

    Examples:
      | name         | email               | phone       | select                |
      | QA Chornenky | jhomarq13@gmail.com | 12312312312 | I was hurt on the Job |
  # | QA Chornenky | jhomarq13@gmail.com | 12312312312 | I have a Question         |
  # | QA Chornenky | jhomarq13@gmail.com | 12312312312 | I need Help               |
  # | QA Chornenky | jhomarq13@gmail.com | 12312312312 | Other                     |
  # | QA Chornenky | jhomarq13@gmail.com | 12312312312 | I was in a Car Accident   |
  # | QA Chornenky | jhomarq13@gmail.com | 12312312312 | I was bitten by an Animal |
  # | QA Chornenky | jhomarq13@gmail.com | 12312312312 | Medical Malpractice       |


  Scenario Outline: News article's detail page footer - contact form
    Given user navigates to the page 'News'
    When user inputs Name '<name>' in the footer contact form
    And user inputs Email '<email>' in the footer contact form
    And user inputs Phone Number '<phone>' in the footer contact form
    And user inputs message '<message>' in the footer contact form
    And user ticks agree in the footer contact form
    And user clicks the send button in the footer contact form
    Then verify sent message 'Thank you for your message. It has been sent.' is displayed in the footer contact form

    Examples:
      | name         | email               | phone       | message                                   |
      | QA Chornenky | jhomarq13@gmail.com | 12312312312 | QA Chornenky automation in English locale |


  Scenario Outline: Contact page - contact form
    Given user navigates to the page 'Contact'
    When user inputs Name '<name>' in contact page contact form
    And user inputs Email '<email>' in contact page contact form
    And user inputs Phone Number '<phone>' in contact page contact form
    And user inputs Zip Code '<zip>' in contact page contact form
    And user selects picklist state '<state>' in contact page contact form
    And user ticks to be contacted by phone in contact page contact form
    And user ticks to be contacted by email in contact page contact form
    And user inputs message '<message>' in contact page contact form
    And user ticks agree in contact page contact form
    And user clicks the send button in contact page contact form
    Then verify sent message 'Thank you for your message. It has been sent.' is displayed in contact page contact form

    Examples:
      | name         | email               | phone       | zip   | state     | message                                   |
      | QA Chornenky | jhomarq13@gmail.com | 12312312312 | 12312 | UT - Utah | QA Chornenky automation in English locale |
