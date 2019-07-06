# OpenData

## Instructions to run

The application is hosted on the following public URL

https://opendata-soton-travel.firebaseapp.com

Also, if is needed to host locally.

- Copy the contents of the Website folder into any web server of your preference the main file is index.html.

## Structure

- Data: Contains datasets, original URLs and the code used on the cleaning process
- Website: Contains the code from will host the visualization
- Output: Contains 5 Folders
  - Alert Type - The Tableau workbook and the data used to display current alterts world-wide.
  - Arrival Delay Prediction - The python notebook that has the Logistic Regression model trained on the arrival delay data and predicts   the arrival delay for 2020 along with the prdiction output data and the tableau workbook with the prediction.
  - Departure Delay Prediction - The python notebook that has the Logistic Regression model trained on the departure delay data and predicts the departure delay for 2020 along with and prdiction output data and the tableau workbook with the prediction.
  - Disaster - The python notebook that has the Logistic Regression model trained on the disaster data and predicts the disaster type for each country in 2020 along with training data, test data and prdiction output data and the tableau workbook for the disaster from 2009-2019 and the prediction for 2020.
  - Flight Delay - Contains the Flight arrival delay, Departure Delay, Cancellation, Divertion, Air Time and Carrier Delay tableau workbooks.
- Firebase: Configuration of the firebase hosting project (Contents of the website project should be copied into the public folder before deploying)


## For development only - To Run

Install NodeJS
Run npm install -g http-server
Run http-server Website -c-1
