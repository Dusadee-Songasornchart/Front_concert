*** Settings ***
Library           SeleniumLibrary

*** Variables ***
${BASE_URL}       http://localhost:3000/  # Update with your actual URL
${USER_NAME}      test
${PASSWORD}       test1234

*** Test Cases ***

*** Test Cases ***
Test Overview Tab
    Open Browser    ${BASE_URL}admin   chrome
    Maximize Browser Window
    Wait Until Page Contains Element    id=Overview
    Click Element    id=Overview
    Wait Until Element Is Visible    id=Overview_
    Page Should Contain Element    id=Overview_

Test Create Tab
    Open Browser    ${BASE_URL}admin    chrome
    Maximize Browser Window
    Wait Until Page Contains Element    id=Create
    Click Element    id=Create
    Wait Until Element Is Visible    id=Create_concert
    Page Should Contain Element    id=Create_concert

Test History Page
    Open Browser    ${BASE_URL}admin/history    chrome
    Maximize Browser Window
    Wait Until Page Contains Element    css=.layout-table
    Close Browser

Test DeleteCard 
    Open Browser    ${BASE_URL}admin    chrome
    Maximize Browser Window
    Wait Until Page Contains Element    css=.card   
    Click Element    css=.delete-card
    Wait Until Page Contains Element    css=.modal-text
    ${modal_text} =    Get Text    css=.modal-text
    Click Button    xpath=//button[@class="modal-button-Yes"]
    Wait Until Page Contains Element    css=.success-message
    Close Browser

Test CreateCard null
    Open Browser    ${BASE_URL}admin    chrome
    Maximize Browser Window
    Wait Until Page Contains Element    id=Create
    Click Element    id=Create
    Wait Until Element Is Visible    id=Create_concert
    Click Element    css=.card-save
    Wait Until Page Contains Element    css=.errMsg
    Close Browser

Test CreateCard success
    Open Browser    ${BASE_URL}admin    chrome
    Maximize Browser Window
    Wait Until Page Contains Element    id=Create
    Click Element    id=Create
    Wait Until Element Is Visible    id=Create_concert
    Input Text    id=Concertname    Concertname98
    Input Text    id=amount    98
    Input Text    id=Description    Concertname98
    Click Element    css=.card-save
    Wait Until Page Contains Element    css=.success-message
    Close Browser

Test Reserve Concert
    Open Browser    ${BASE_URL}user    chrome
    Maximize Browser Window
    Click Element    css=.reserve-card
    Page Should Contain Element    css=.success
    [Teardown]    Close Browser

Test Cancel Concert
    Open Browser    ${BASE_URL}user    chrome
    Maximize Browser Window
    Click Element    css=.cancel-card
    Page Should Contain Element    css=.success
    [Teardown]    Close Browser

