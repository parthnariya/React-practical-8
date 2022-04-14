# Sign-up Demo


### Output:

![Screenshot from 2022-04-05 15-46-35](https://user-images.githubusercontent.com/68768212/161904266-f6ef40de-1a45-49d1-9eb9-f6b52e74726c.png)


![Screenshot from 2022-04-05 15-52-50](https://user-images.githubusercontent.com/68768212/161904279-4d1acc8f-a581-47bb-8f40-86c46dd0f343.png)


### What is AWS?
- Amazon Simple Storage Service (AWS S3) is highly available, scalable, secure, durable cloud storage where we can store millions of data with very minimal rates.

[AWS hosted link](http://signup-demo-prac-9.s3-website-us-west-2.amazonaws.com/)

### Steps to host react app on S3
1. First create bucket
![Screenshot from 2022-04-14 17-28-15](https://user-images.githubusercontent.com/68768212/163386435-0286e73f-6b5c-40f3-815d-1252e8e01a3f.png)

2. Unblock all Public Access

![Screenshot from 2022-04-14 17-31-28](https://user-images.githubusercontent.com/68768212/163386684-93eae73c-acdc-4866-af80-dc92ff5674eb.png)

3. And Enable Static website hosting

![Screenshot from 2022-04-14 17-32-49](https://user-images.githubusercontent.com/68768212/163386827-3318aa92-136a-48be-ba5c-ee4393b51736.png)


4. Add Action in Git repo.
```
name: signup-demo-prac9
on:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}
      - name: Build React App
        run: npm install && npm run build
      - name: Deploy app build to S3 bucket
        run: aws s3 sync ./build/ s3://signup-demo-prac-9 --delete

```

5. And add AWS credentials as Secrets of the action
![Screenshot from 2022-04-14 17-37-50](https://user-images.githubusercontent.com/68768212/163387888-3459811f-e65f-4be8-a3da-0b1074abccd0.png)

### Run Project Locally

##### Prerequisite
- node (v16.13.1)
- reactjs
##### Development
- redux-toolkit for state management
- react-bootstrap to style the components
- react router (v5) for routing
- formik and yup for form validation
##### Steps to Run Project
1. clone repo.
```sh
$git clone https://github.com/parthnariya/React-practical-8.git
$cd React-practical-8
```
2. install dependencies
```sh
$npm install
```
3. start project
```sh
$npm start
```
4. open [http://localhost:3000/](http://localhost:3000/) to see the app in action...



