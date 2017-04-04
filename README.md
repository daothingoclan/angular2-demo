# angular2-Journal-demo

## What we have done:
* Finish course Angular 2 with hand-on practices ( 5 days).
* Built the Angular 2 solution structure for enterprise application.
* Demo app for Jounal function using virtualization & bootstrap.
* API possible performance improvement.

## Artifacts in the report:
* The workable demo application with Local installation guideline.
* Client render and interaction time comparation report.

# Installation

First of all, make sure your computer has installed NodeJs. After that, following these steps below:

- Step 1: Install dependencies:

    From the root of the repository, run:

    *   Install Typings global -> $npm install typings -g

    *   Install Typescript global -> $npm install typescript -g 

    *   Install Typescript Compiler global -> $npm install tsc -g

    *   Install Lite-server global - > $npm install lite-server -g

    *   Install all dependencies for project -> $npm install

- Step 2: Run project

    * Run $npm start

## API
    - API at **http://aspit.orientsoftware.net**. 
    - We can modify it at: src\modules\journal\_share\const\apiBaseUrl.ts
  
# Performance comparison on patient 95:

## @Kennethaa demo by Angular 1:

| Time          | Getting data time(ms)**[LOCAL ENV]**      | Calculating height time(ms)|
| ------------- | :------------------------------------:| :-------------------------:| 
| 1.            | 298                        | 641                        |
| 2.            | 218                        | 656                        |
| 3.            | 259                        | 650                        |
| 4.            | 220                        | 695                        |
| 5.            | 242                        | 646                        |
|Average        | 247.4                      | 657.6                      |


## Journal demo by Angular 2:

| Time          | Getting data time(ms)**[Orient ENV]**      | Calculating height time(ms)|
| ------------- | :-------------------------------------:| :-------------------------:|  
| 1.            | 645                        | 466                        |
| 2.            | 679                        | 447                        |
| 3.            | 660                        | 440                        |
| 4.            | 644                        | 432                        |
| 5.            | 731                        | 422                        |
|Average        | 671.8                      | 441.4                      |

# License

   © ASPIT, Please feel free to contact Team for any further information.
