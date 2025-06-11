document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('comprehensive-form');
  const progressBar = document.getElementById('progress');
  const requiredFields = document.querySelectorAll('[required]');
  const totalRequired = requiredFields.length;

  // Toggle a previous address section
  const noPreviousAddressCheckbox = document.getElementById('noPreviousAddress');
  const previousAddressSection = document.getElementById('previousAddressSection');

  noPreviousAddressCheckbox.addEventListener('change', function () {
    previousAddressSection.style.display = this.checked ? 'none' : 'block';
  });

  // Toggle previous employment section
  const noPreviousEmploymentCheckbox = document.getElementById('noPreviousEmployment');
  const previousEmploymentSection = document.getElementById('previousEmploymentSection');

  noPreviousEmploymentCheckbox.addEventListener('change', function () {
    previousEmploymentSection.style.display = this.checked ? 'none' : 'block';
  });

  // Form submission
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic validation (would be more comprehensive in a real application)
    let isValid = true;
    requiredFields.forEach(field => {
      if (field.value.trim() === '') {
        isValid = false;
        field.classList.add('invalid');
      } else {
        field.classList.remove('invalid');
      }
    });
    if (isValid) {

      // In a real application, you would submit the form data to a server here

      // Get the values from the input fields
      const userFirstName = document.getElementById('firstName').value.trim();
      const userLastName = document.getElementById('lastName').value.trim();
      const userGender = document.getElementById('gender').value.trim();
      const userNationality = document.getElementById('nationality').value.trim();
      const userPlaceOfBirth = document.getElementById('placeOfBirth').value.trim();
      const userDob = document.getElementById('dob').value.trim();

      const userEmail = document.getElementById('email').value.trim();
      const confirmEmail = document.getElementById('confirmEmail').value.trim();
      const userPhone = document.getElementById('phone').value.trim();
      const altPhone = document.getElementById('altPhone').value.trim();
      const preferredContact = document.getElementById('preferredContact').value.trim();
      const emergencyContactName = document.getElementById('emergencyContactName').value.trim();
      const emergencyContactRelation = document.getElementById('emergencyContactRelation').value.trim();
      const emergencyContactPhone = document.getElementById('emergencyContactPhone').value.trim();


      // Get the values from the input fields
      const race = document.getElementById('race').value.trim();
      const userCircumstances = document.getElementById('circumstances').value.trim();
      const userCollaborators = document.getElementById('collaboration').value.trim();
      const additionalAlienInfo = document.getElementById('additionalAlienInfo').value.trim();

      // Get the values from the input fields
      const solarSystem = document.getElementById('solarSystem').value.trim();
      const planet = document.getElementById('planet').value.trim();
      const streetAddress = document.getElementById('streetAddress').value.trim();
      const addressLine2 = document.getElementById('streetAddressLine2').value.trim();
      const city = document.getElementById('city').value.trim();
      const stateProvince = document.getElementById('state').value.trim();
      const zipPostalCode = document.getElementById('zipCode').value.trim();
      const country = document.getElementById('country').value.trim();
      const previousStreetAddress = document.getElementById('prevStreetAddress').value.trim();
      const previousAddressLine2 = document.getElementById('prevStreetAddressLine2').value.trim();
      const previousCity = document.getElementById('prevCity').value.trim();
      const previousStateProvince = document.getElementById('prevState').value.trim();
      const previousZipPostalCode = document.getElementById('prevZipCode').value.trim();
      const previousResidenceType = document.getElementById('prevCountry').value.trim();
      const yearsCurrentAddress = document.getElementById('yearsAtAddress').value.trim();
      const monthsCurrentAddress = document.getElementById('monthsAtAddress').value.trim()

      const employmentStatus = document.getElementById('employmentStatus').value.trim();
      const jobTitle = document.getElementById('occupation').value.trim();
      const currentEmployer = document.getElementById('employer').value.trim();
      const workPhone = document.getElementById('workPhone').value.trim();
      const employerAddress = document.getElementById('employerAddress').value.trim();
      const employerCity = document.getElementById('employerCity').value.trim();
      const employerStateProvince = document.getElementById('employerState').value.trim();
      const employerZipPostalCode = document.getElementById('employerZip').value.trim();
      const employerCountry = document.getElementById('employerCountry').value.trim();
      const employmentStartDate = document.getElementById('employmentStartDate').value.trim();
      const yearsCurrentEmployer = document.getElementById('yearsEmployed').value.trim();
      const monthsCurrentEmployer = document.getElementById('monthsEmployed').value.trim();
      const annualIncome = document.getElementById('annualIncome').value.trim();
      const incomeType = document.getElementById('incomeType').value.trim();
      const previousEmployer = document.getElementById('prevEmployer').value.trim();
      const previousJobTitle = document.getElementById('prevOccupation').value.trim();
      const previousEmployerAddress = document.getElementById('prevEmployerAddress').value.trim();
      const previousEmployerCity = document.getElementById('prevEmployerCity').value.trim();
      const previousStartDate = document.getElementById('prevEmploymentStartDate').value.trim();
      const previousEndDate = document.getElementById('prevEmploymentEndDate').value.trim();

      const highestEducation = document.getElementById('highestEducation').value.trim();
      const highSchoolName = document.getElementById('highSchoolName').value.trim();
      const highSchoolLocation = document.getElementById('highSchoolLocation').value.trim();
      const highSchoolGraduationYear = document.getElementById('highSchoolGradYear').value.trim();
      const highSchoolDiploma = document.getElementById('diplomaReceived').value.trim();
      const collegeName = document.getElementById('collegeName').value.trim();
      const collegeLocation = document.getElementById('collegeLocation').value.trim();
      const collegeDegree = document.getElementById('degreeEarned').value.trim();
      const collegeMajor = document.getElementById('majorField').value.trim();
      const collegeMinor = document.getElementById('minorField').value.trim();
      const collegeStartYear = document.getElementById('collegeStartYear').value.trim();
      const collegeEndYear = document.getElementById('collegeEndYear').value.trim();
      const collegeGPA = document.getElementById('gpa').value.trim();
      const graduateSchoolName = document.getElementById('gradSchoolName').value.trim();
      const graduateSchoolLocation = document.getElementById('gradSchoolLocation').value.trim();
      const graduateDegree = document.getElementById('gradDegree').value.trim();
      const graduateFieldOfStudy = document.getElementById('gradField').value.trim();
      const graduateStartYear = document.getElementById('gradStartYear').value.trim();
      const graduateEndYear = document.getElementById('gradEndYear').value.trim();
      const graduateGPA = document.getElementById('gradGpa').value.trim();

      const professionalSkills = document.getElementById('professionalSkills').value.trim();
      const technicalSkills = document.getElementById('technicalSkills').value.trim();
      const languagesSpoken = document.getElementById('languages').value.trim();
      const certificationsLicenses = document.getElementById('certifications').value.trim();

      const reference1Name = document.getElementById('ref1Name').value.trim();
      const reference1Relationship = document.getElementById('ref1Relationship').value.trim();
      const reference1Company = document.getElementById('ref1Company').value.trim();
      const reference1Phone = document.getElementById('ref1Phone').value.trim();
      const reference1Email = document.getElementById('ref1Email').value.trim();
      const reference2Name = document.getElementById('ref2Name').value.trim();
      const reference2Relationship = document.getElementById('ref2Relationship').value.trim();
      const reference2Company = document.getElementById('ref2Company').value.trim();
      const reference2Phone = document.getElementById('ref2Phone').value.trim();
      const reference2Email = document.getElementById('ref2Email').value.trim();
      const reference3Name = document.getElementById('ref3Name').value.trim();
      const reference3Relationship = document.getElementById('ref3Relationship').value.trim();
      const reference3Company = document.getElementById('ref3Company').value.trim();
      const reference3Phone = document.getElementById('ref3Phone').value.trim();
      const reference3Email = document.getElementById('ref3Email').value.trim();

      const criminalRecord = document.getElementById('criminalRecord').value.trim();

      const travelSolarSystem = document.getElementById('targetSolarSystem').value.trim();
      const travelPlanet = document.getElementById('targetPlanet').value.trim();
      const travelPurpose = document.getElementById('travelPurpose').value.trim();
      const travelDate = document.getElementById('plannedTravelDate').value.trim();
      const travelDuration = document.getElementById('travelDuration').value.trim();

      const previousTravelUniverse = document.getElementById('universe').value.trim();
      const previousTravelSolarSystem = document.getElementById('previousTravelSolarSystem').value.trim();
      const previousTravelPlanet = document.getElementById('previousTravelPlanet').value.trim();
      const previousTravelPurpose = document.getElementById('previousTravelPurpose').value.trim();
      const previousTravelDate = document.getElementById('previousTravelDate').value.trim();
      const previousTravelEnd = document.getElementById('previousTravelEndDate').value.trim();

      const financialSecurity = document.getElementById('financialSecurity').value.trim();
      const medicalInsurance = document.getElementById('medicalInsurance').value.trim();

      const clothingSize = document.getElementById('clothingSize').value.trim();
      const shoeSize = document.getElementById('shoeSize').value.trim();
      const headCircumference = document.getElementById('headCircumference').value.trim();

      const additionalInfo = document.getElementById('userAdditionalInfo').value.trim();
      const heardAboutUs = document.getElementById('howDidYouHear').value.trim();
      const referredBy = document.getElementById('referralSource').value.trim();
      // Display the text in the table cells
      document.getElementById('outputUserFirstName').textContent = userFirstName;
      document.getElementById('outputUserLastName').textContent = userLastName;
      document.getElementById('outputUserGender').textContent = userGender;
      document.getElementById('outputNationality').textContent = userNationality;
      document.getElementById('outputPlaceOfBirth').textContent = userPlaceOfBirth;
      document.getElementById('outputDOB').textContent = userDob;

      document.getElementById('outputEmail').textContent = userEmail;
      document.getElementById('outputConfirmEmail').textContent = confirmEmail;
      document.getElementById('outputPhone').textContent = userPhone;
      document.getElementById('outputAltPhone').textContent = altPhone;
      document.getElementById('outputPreferredContact').textContent = preferredContact;
      document.getElementById('outputEmergencyContactName').textContent = emergencyContactName;
      document.getElementById('outputEmergencyContactRelation').textContent = emergencyContactRelation;
      document.getElementById('outputEmergencyContactPhone').textContent = emergencyContactPhone;

      // Display the text in the table cells
      document.getElementById('outputRace').textContent = race;
      document.getElementById('outputCircumstances').textContent = userCircumstances;
      document.getElementById('outputCollaborators').textContent = userCollaborators;
      document.getElementById('outputAdditionalInfo').textContent = additionalAlienInfo;

      document.getElementById('outputSolarSystem').textContent = solarSystem;
      document.getElementById('outputPlanet').textContent = planet;
      document.getElementById('outputStreetAddress').textContent = streetAddress;
      document.getElementById('outputAddressLine2').textContent = addressLine2;
      document.getElementById('outputCity').textContent = city;
      document.getElementById('outputStateProvince').textContent = stateProvince;
      document.getElementById('outputZipPostalCode').textContent = zipPostalCode;
      document.getElementById('outputCountry').textContent = country;
      document.getElementById('outputPreviousStreetAddress').textContent = previousStreetAddress;
      document.getElementById('outputPreviousAddressLine2').textContent = previousAddressLine2;
      document.getElementById('outputPreviousCity').textContent = previousCity;
      document.getElementById('outputPreviousStateProvince').textContent = previousStateProvince;
      document.getElementById('outputPreviousZipPostalCode').textContent = previousZipPostalCode;
      document.getElementById('outputPreviousResidenceType').textContent = previousResidenceType;
      document.getElementById('outputYearsCurrentAddress').textContent = yearsCurrentAddress;
      document.getElementById('outputMonthsCurrentAddress').textContent = monthsCurrentAddress;

      document.getElementById('outputEmploymentStatus').textContent = employmentStatus;
      document.getElementById('outputJobTitle').textContent = jobTitle;
      document.getElementById('outputCurrentEmployer').textContent = currentEmployer;
      document.getElementById('outputWorkPhone').textContent = workPhone;
      document.getElementById('outputEmployerAddress').textContent = employerAddress;
      document.getElementById('outputEmployerCity').textContent = employerCity;
      document.getElementById('outputEmployerStateProvince').textContent = employerStateProvince;
      document.getElementById('outputEmployerZipPostalCode').textContent = employerZipPostalCode;
      document.getElementById('outputEmployerCountry').textContent = employerCountry;
      document.getElementById('outputEmploymentStartDate').textContent = employmentStartDate;
      document.getElementById('outputYearsCurrentEmployer').textContent = yearsCurrentEmployer;
      document.getElementById('outputMonthsCurrentEmployer').textContent = monthsCurrentEmployer;
      document.getElementById('outputAnnualIncome').textContent = annualIncome;
      document.getElementById('outputIncomeType').textContent = incomeType;
      document.getElementById('outputPreviousEmployer').textContent = previousEmployer;
      document.getElementById('outputPreviousJobTitle').textContent = previousJobTitle;
      document.getElementById('outputPreviousEmployerAddress').textContent = previousEmployerAddress;
      document.getElementById('outputPreviousEmployerCity').textContent = previousEmployerCity;
      document.getElementById('outputPreviousStartDate').textContent = previousStartDate;
      document.getElementById('outputPreviousEndDate').textContent = previousEndDate;

      document.getElementById('outputHighestEducation').textContent = highestEducation;
      document.getElementById('outputHighSchoolName').textContent = highSchoolName;
      document.getElementById('outputHighSchoolLocation').textContent = highSchoolLocation;
      document.getElementById('outputHighSchoolGraduationYear').textContent = highSchoolGraduationYear;
      document.getElementById('outputHighSchoolDiploma').textContent = highSchoolDiploma;
      document.getElementById('outputCollegeName').textContent = collegeName;
      document.getElementById('outputCollegeLocation').textContent = collegeLocation;
      document.getElementById('outputCollegeDegree').textContent = collegeDegree;
      document.getElementById('outputCollegeMajor').textContent = collegeMajor;
      document.getElementById('outputCollegeMinor').textContent = collegeMinor;
      document.getElementById('outputCollegeStartYear').textContent = collegeStartYear;
      document.getElementById('outputCollegeEndYear').textContent = collegeEndYear;
      document.getElementById('outputCollegeGPA').textContent = collegeGPA;
      document.getElementById('outputGraduateSchoolName').textContent = graduateSchoolName;
      document.getElementById('outputGraduateSchoolLocation').textContent = graduateSchoolLocation;
      document.getElementById('outputGraduateDegree').textContent = graduateDegree;
      document.getElementById('outputGraduateFieldOfStudy').textContent = graduateFieldOfStudy;
      document.getElementById('outputGraduateStartYear').textContent = graduateStartYear;
      document.getElementById('outputGraduateEndYear').textContent = graduateEndYear;
      document.getElementById('outputGraduateGPA').textContent = graduateGPA;

      document.getElementById('outputProfessionalSkills').textContent = professionalSkills;
      document.getElementById('outputTechnicalSkills').textContent = technicalSkills;
      document.getElementById('outputLanguagesSpoken').textContent = languagesSpoken;
      document.getElementById('outputCertificationsLicenses').textContent = certificationsLicenses;

      document.getElementById('outputReference1Name').textContent = reference1Name;
      document.getElementById('outputReference1Relationship').textContent = reference1Relationship;
      document.getElementById('outputReference1Company').textContent = reference1Company;
      document.getElementById('outputReference1Phone').textContent = reference1Phone;
      document.getElementById('outputReference1Email').textContent = reference1Email;
      document.getElementById('outputReference2Name').textContent = reference2Name;
      document.getElementById('outputReference2Relationship').textContent = reference2Relationship;
      document.getElementById('outputReference2Company').textContent = reference2Company;
      document.getElementById('outputReference2Phone').textContent = reference2Phone;
      document.getElementById('outputReference2Email').textContent = reference2Email;
      document.getElementById('outputReference3Name').textContent = reference3Name;
      document.getElementById('outputReference3Relationship').textContent = reference3Relationship;
      document.getElementById('outputReference3Company').textContent = reference3Company;
      document.getElementById('outputReference3Phone').textContent = reference3Phone;
      document.getElementById('outputReference3Email').textContent = reference3Email;

      document.getElementById('outputCriminalRecord').textContent = criminalRecord;

      document.getElementById('outputTravelSolarSystem').textContent = travelSolarSystem;
      document.getElementById('outputTravelPlanet').textContent = travelPlanet;
      document.getElementById('outputTravelPurpose').textContent = travelPurpose;
      document.getElementById('outputTravelDate').textContent = travelDate;
      document.getElementById('outputTravelDuration').textContent = travelDuration;

      document.getElementById('outputPreviousTravelUniverse').textContent = previousTravelUniverse;
      document.getElementById('outputPreviousTravelSolarSystem').textContent = previousTravelSolarSystem;
      document.getElementById('outputPreviousTravelPlanet').textContent = previousTravelPlanet;
      document.getElementById('outputPreviousTravelPurpose').textContent = previousTravelPurpose;
      document.getElementById('outputPreviousTravelDate').textContent = previousTravelDate;
      document.getElementById('outputPreviousTravelEnd').textContent = previousTravelEnd;

      document.getElementById('outputFinancialSecurity').textContent = financialSecurity;
      document.getElementById('outputMedicalInsurance').textContent = medicalInsurance;

      document.getElementById('outputClothingSize').textContent = clothingSize;
      document.getElementById('outputShoeSize').textContent = shoeSize;
      document.getElementById('outputHeadCircumference').textContent = headCircumference;

      document.getElementById('outputUserAdditionalInfo').textContent = additionalInfo;
      document.getElementById('outputHeardAboutUs').textContent = heardAboutUs;
      document.getElementById('outputReferredBy').textContent = referredBy;
      alert('Form submitted successfully! Thank you for your application.');
      // Initialize display
    } else {
      alert('Please fill in all required fields marked with an asterisk (*)');
    }
  });
});
