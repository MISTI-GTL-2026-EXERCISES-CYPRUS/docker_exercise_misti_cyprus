# Exercise 3: Dockerfile from Scratch

## Objective
The goal of this exercise is to create a `Dockerfile` for a Node.js application without any starting template. You will need to apply what you learned in Exercise 2.

## The Application
In this directory, you have a simple Node.js web application:
- `package.json`: Defines the dependencies (it uses `express`)
- `index.js`: The main application logic

To run this application normally (if you had Node.js installed), you would:
1. Run `npm install` to install dependencies
2. Run `npm start` or `node index.js` to start the server
3. The server listens on port **3000**

## Your Task

Your task is to create a file named `Dockerfile` in this directory that can build an image and run this application.

### Requirements for the Dockerfile:
1. **Base Image**: Use an official Node.js image (e.g., `node:18-slim` or `node:20-alpine`).
2. **Working Directory**: Set the working directory to `/usr/src/app`.
3. **Copy Files**: Copy the `package.json` and `index.js` files into the container.
4. **Install Dependencies**: Run the command to install the required packages (`npm install`).
5. **Port**: Expose the port that the application uses (3000).
6. **Startup Command**: Define the command to start the application (`npm start`).

## Steps to Complete

### Step 1: Create the Dockerfile
Create a new file named `Dockerfile` and write the instructions.

### Step 2: Build the Image
Build your image and tag it as `my-node-app`:
```bash
docker build -t my-node-app .
```

### Step 3: Run the Container
Run the container and map the ports so you can access it from your browser:
```bash
docker run -p 3000:3000 --name node-container my-node-app
```

### Step 4: Verify
Open `http://localhost:3000` in your browser. If you see the "Congratulations!" message, you've done it!

## Hints

- Remember the `COPY` instruction. You can copy individual files or the whole directory.
- `RUN` is used for build-time commands (like installing packages).
- `CMD` is used for the command that runs when the container starts.
- Use `.dockerignore` to avoid copying `node_modules` if you happened to install them locally (optional but good practice).

## Success Criteria
✅ A `Dockerfile` exists in this directory  
✅ The image builds without errors  
✅ The container runs and the web page is accessible  
✅ You understand why each line in your `Dockerfile` is necessary
