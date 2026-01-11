# Exercise 1: Running Docker Containers

## Objective
Learn how to run a Docker container from a pre-built image.

## Prerequisites
- Docker installed on your system
- Basic command line knowledge

## What is Docker?
Docker is a platform that allows you to package applications and their dependencies into containers. Containers are lightweight, portable, and can run consistently across different environments.

## Task Instructions

### Step 1: Verify Docker Installation
First, verify that Docker is installed and running on your system:

```bash
docker --version
```

You should see output similar to: `Docker version XX.XX.XX, build XXXXXXX`

### Step 2: Run Your First Container
The simplest way to test Docker is to run the official "hello-world" container:

```bash
docker run hello-world
```

### What Happens?
When you run this command:
1. Docker checks if the `hello-world` image exists locally
2. If not found locally, Docker downloads (pulls) it from Docker Hub
3. Docker creates a new container from the image
4. Docker runs the container, which prints a welcome message
5. The container exits automatically after displaying the message

### Step 3: View Downloaded Images
To see the images you have downloaded:

```bash
docker images
```

You should see the `hello-world` image in the list.

### Step 4: View Container History
To see all containers (including stopped ones):

```bash
docker ps -a
```

This shows you the container that ran and exited.

## Additional Tasks

### Try Running Other Pre-built Containers

1. **Run Ubuntu container interactively:**
   ```bash
   docker run -it ubuntu bash
   ```
   This starts an Ubuntu container with an interactive bash shell. Type `exit` to leave.

2. **Run Nginx web server:**
   ```bash
   docker run -d -p 8080:80 nginx
   ```
   This runs an Nginx web server in the background (`-d` flag) and maps port 8080 on your host to port 80 in the container. Visit `http://localhost:8080` in your browser.
   
   To stop it:
   ```bash
   docker ps
   docker stop <container_id>
   ```

## Key Docker Commands Summary

| Command | Description |
|---------|-------------|
| `docker run <image>` | Create and run a container from an image |
| `docker ps` | List running containers |
| `docker ps -a` | List all containers (including stopped) |
| `docker images` | List downloaded images |
| `docker stop <container_id>` | Stop a running container |
| `docker rm <container_id>` | Remove a stopped container |
| `docker rmi <image_id>` | Remove an image |

## Success Criteria
✅ You have successfully run the `hello-world` container  
✅ You can see the downloaded image using `docker images`  
✅ You understand the basic Docker run workflow  

## Next Steps
Once you're comfortable running pre-built containers, move on to Exercise 2 to learn how to build your own Docker images!
