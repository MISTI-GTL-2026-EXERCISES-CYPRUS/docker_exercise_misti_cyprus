# Exercise 2: Building Docker Images

## Objective
Learn how to build your own Docker image from a Dockerfile and run a container from it.

## Prerequisites
- Docker installed on your system
- Completed Exercise 1 (Running Docker Containers)
- Basic understanding of command line

## What is a Dockerfile?
A Dockerfile is a text file that contains instructions for building a Docker image. It defines:
- The base image to start from
- Files to copy into the image
- Commands to run during the build
- The application to run when a container starts

## Files in This Exercise
- `Dockerfile` - Instructions for building the image
- `app.py` - A simple Flask web application

## Understanding the Dockerfile

Let's break down each line in the `Dockerfile`:

```dockerfile
FROM python:3.9-slim
```
- Specifies the base image (Python 3.9 slim version)
- This provides a minimal Python environment

```dockerfile
WORKDIR /app
```
- Sets the working directory inside the container
- All subsequent commands run from this directory

```dockerfile
COPY . /app
```
- Copies files from your current directory to `/app` in the container

```dockerfile
RUN pip install --no-cache-dir flask
```
- Runs a command during image build
- Installs the Flask web framework

```dockerfile
EXPOSE 5000
```
- Documents that the container will listen on port 5000
- This is informational; actual port mapping happens at runtime

```dockerfile
ENV NAME=DockerStudent
```
- Sets an environment variable that the application can use

```dockerfile
CMD ["python", "app.py"]
```
- Specifies the command to run when the container starts

## Task Instructions

### Step 1: Navigate to This Directory
```bash
cd 02-building-images
```

### Step 2: Examine the Files
Look at the `Dockerfile` and `app.py` to understand what they do:

```bash
cat Dockerfile
cat app.py
```

### Step 3: Build the Docker Image
Build the image with a tag name (e.g., "my-flask-app"):

```bash
docker build -t my-flask-app .
```

**What happens:**
- Docker reads the Dockerfile
- Downloads the base image (python:3.9-slim) if not present
- Executes each instruction in order
- Creates a new image tagged as "my-flask-app"

The `.` at the end specifies the build context (current directory).

### Step 4: Verify the Image
Check that your image was created:

```bash
docker images
```

You should see `my-flask-app` in the list.

### Step 5: Run the Container
Run a container from your newly built image:

```bash
docker run -d -p 5000:5000 --name my-app my-flask-app
```

**Flags explained:**
- `-d` - Run in detached mode (background)
- `-p 5000:5000` - Map port 5000 on host to port 5000 in container
- `--name my-app` - Give the container a friendly name
- `my-flask-app` - The image to use

### Step 6: Test the Application
Open your web browser and visit:
```
http://localhost:5000
```

You should see a greeting message from your Flask application!

### Step 7: View Container Logs
See what your application is logging:

```bash
docker logs my-app
```

### Step 8: Stop and Remove the Container
When you're done:

```bash
docker stop my-app
docker rm my-app
```

## Additional Challenges

### Challenge 1: Modify the Environment Variable
Run the container with a different NAME environment variable:

```bash
docker run -d -p 5000:5000 -e NAME="YourName" --name my-app my-flask-app
```

Refresh your browser to see the change!

### Challenge 2: Rebuild After Changes
1. Modify `app.py` to change the message
2. Rebuild the image: `docker build -t my-flask-app .`
3. Stop the old container: `docker stop my-app && docker rm my-app`
4. Run a new container: `docker run -d -p 5000:5000 --name my-app my-flask-app`
5. Check your changes in the browser

### Challenge 3: Explore the Container
Run an interactive shell inside your running container:

```bash
docker exec -it my-app bash
```

Inside the container, you can:
- Explore the file system: `ls -la`
- Check the working directory: `pwd`
- View running processes: `ps aux`
- Exit with: `exit`

## Key Docker Build Commands

| Command | Description |
|---------|-------------|
| `docker build -t <name> .` | Build an image from Dockerfile |
| `docker run -p <host>:<container> <image>` | Run container with port mapping |
| `docker logs <container>` | View container logs |
| `docker exec -it <container> <command>` | Execute command in running container |
| `docker stop <container>` | Stop a running container |
| `docker rm <container>` | Remove a stopped container |
| `docker rmi <image>` | Remove an image |

## Best Practices Learned

1. **Use Official Base Images**: Start with trusted images from Docker Hub
2. **Layer Caching**: Docker caches layers; order instructions from least to most frequently changing
3. **Minimal Images**: Use slim or alpine variants when possible
4. **Single Responsibility**: Each container should do one thing well
5. **Environment Variables**: Use them for configuration that changes between environments

## Success Criteria
✅ You have successfully built a Docker image from a Dockerfile  
✅ You can run a container from your custom image  
✅ You understand the basic Dockerfile instructions  
✅ You can access the application running in the container  

## Troubleshooting

**Port already in use?**
```bash
docker ps
docker stop <conflicting-container>
```

**Build errors?**
- Check that all files exist in the directory
- Ensure Docker daemon is running
- Read error messages carefully - they usually point to the problem line

**Can't access the application?**
- Verify the container is running: `docker ps`
- Check logs: `docker logs my-app`
- Ensure you're using the correct port

## Next Steps
Now that you understand Docker basics, explore:
- Multi-stage builds for smaller images
- Docker Compose for multi-container applications
- Volume mounts for persistent data
- Docker Hub for sharing images
