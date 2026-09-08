## Purpose

Computes and displays the projected future value of a single lump-sum investment using fixed annual compound interest, after validating the user's input.

## ADDED Requirements

### Requirement: Input validation before calculation
The system SHALL validate the principal, annual interest rate, and years fields before performing any calculation, and SHALL NOT calculate or display a result while any field is invalid.

#### Scenario: Valid inputs allow calculation
- **GIVEN** the principal, annual interest rate, and years fields all contain valid positive numbers
- **WHEN** the user submits the calculator form
- **THEN** the system proceeds to calculate and display a result

#### Scenario: Non-numeric input is rejected
- **GIVEN** the principal, rate, or years field contains non-numeric text
- **WHEN** the user submits the form
- **THEN** the system displays an inline validation error next to the offending field and does not calculate a result

#### Scenario: Empty required field is rejected
- **GIVEN** one or more required fields are empty
- **WHEN** the user submits the form
- **THEN** the system displays an inline validation error and does not calculate a result

#### Scenario: Zero or negative principal is rejected
- **GIVEN** the principal value is zero or negative
- **WHEN** the user submits the form
- **THEN** the system displays an inline validation error and does not calculate a result

#### Scenario: Negative interest rate is rejected
- **GIVEN** the annual interest rate is negative
- **WHEN** the user submits the form
- **THEN** the system displays an inline validation error and does not calculate a result

#### Scenario: Zero or negative years is rejected
- **GIVEN** the number of years is zero or negative
- **WHEN** the user submits the form
- **THEN** the system displays an inline validation error and does not calculate a result

### Requirement: Fixed annual compound interest calculation
The system SHALL compute the future value of a lump-sum investment using fixed annual compounding: `A = P * (1 + r)^t`, where `P` is the principal, `r` is the annual interest rate expressed as a decimal, and `t` is the number of years. The system SHALL derive total interest earned as `A - P`.

#### Scenario: Future value computed from valid inputs
- **GIVEN** a valid principal, annual interest rate, and number of years
- **WHEN** the user submits the form
- **THEN** the system computes the final amount as `P * (1 + r)^t` and the total interest earned as the final amount minus the principal

### Requirement: Result display formatting
The system SHALL display the final amount and total interest earned, each formatted to exactly 2 decimal places, by updating the page's DOM directly. The system SHALL NOT use `alert()` (or any other blocking dialog) to display results or validation errors.

#### Scenario: Result shown to 2 decimal places
- **GIVEN** the system has computed a final amount and total interest earned
- **WHEN** the results are displayed to the user
- **THEN** both values are rendered in the page formatted to exactly 2 decimal places, without using `alert()`

#### Scenario: Validation errors shown inline
- **GIVEN** the submitted input fails validation
- **WHEN** the system reports the error to the user
- **THEN** the error is rendered inline in the page, without using `alert()`

### Requirement: Mobile-responsive layout
The system SHALL render the calculator usably at viewport widths as small as 320px.

#### Scenario: Usable at minimum supported width
- **GIVEN** the viewport width is 320px
- **WHEN** the calculator page is loaded
- **THEN** all inputs, labels, and results remain visible and operable without horizontal scrolling
