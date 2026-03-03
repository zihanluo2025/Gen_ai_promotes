# Task 1: Create a production-ready Dockerfile
As a software developer, you've been asked to containerize a Node.js application for deployment. Your application has the following structure:

```bash
my-node-app/
├── app.js              # Main application file
├── package.json        # Dependencies and scripts
├── package-lock.json   # Locked dependency versions
└── src/
    └── routes/         # Application routes
```

Your application:

- Uses Node.js version 18
- Runs on port 3000
- Has production and development dependencies
- Needs to be deployed to a production environment
- You need to create a Dockerfile that:

- Uses an appropriate base image
- Installs dependencies efficiently
- Configures the container properly
- Follows Docker best practices
- Includes clear documentation

## Prompt
```bash

Create a production-ready Dockerfile for a Node.js 18 application with the following requirements:

Application details:
- Entry point: app.js
- Runs on port 3000
- Has package.json and package-lock.json for dependency management

Requirements:
- Use Node.js 18 LTS Alpine image as base for smaller size
- Set working directory to /app
- Copy package files separately for better layer caching
- Use 'npm ci' instead of 'npm install' for production
- Copy application code after installing dependencies
- Expose port 3000
- Use non-root user for security
- Add comments explaining each section
- Use CMD to start the application

Please provide a complete, well-documented Dockerfile.

```


# Task 2: Enhance - Implement Multi-Stage Builds

Your manager is impressed with the basic Dockerfile, but points out that the production image is still larger than necessary. The image includes build tools and dependencies that aren't needed at runtime. Additionally, you need to support both development and production environments efficiently.

You need to enhance the Dockerfile to:

- Implement multi-stage builds to separate build and runtime environments
- Significantly reduce the final production image size
- Include development dependencies only in the build stage
- Create a leaner production image with only runtime essentials
- Measure and document the size improvements
- This enhancement will reduce deployment times, save storage costs, and improve security by minimizing the attack surface.

## Prompt
```bash
Refactor the existing Dockerfile to use multi-stage builds with these requirements:

1. Create two stages:
   - Stage 1 (builder): Install ALL dependencies including devDependencies
   - Stage 2 (production): Copy only production dependencies and code

2. In the builder stage:
   - Use node:18-alpine as base
   - Install all dependencies (both production and dev)
   - Keep the same layer caching strategy

3. In the production stage:
   - Use node:18-alpine as base
   - Copy only package*.json files
   - Install only production dependencies
   - Copy application code from builder stage
   - Apply all security best practices (non-root user, proper port exposure)

4. Add comments explaining the multi-stage approach and benefits
5. Include commands to compare image sizes before and after

```

# Task 3: Optimize - Add security enhancements and health checks

Your Dockerfile is now optimized for size, but before deploying to production, the security team has requested additional hardening measures. They've identified several security concerns:

- The image may contain known vulnerabilities
- No health check mechanism for monitoring container health
- Missing metadata for container orchestration
- No .dockerignore file to exclude sensitive files
- Environment variables need better handling

You need to enhance the Dockerfile to:

- Add health check configuration
- Include security scanning recommendations
- Add proper labels for documentation
- Create a .dockerignore file
- Handle environment variables securely
- Document security best practices

## Prompt

```bash
Enhance the multi-stage Dockerfile with comprehensive security features:

1. Add a HEALTHCHECK instruction to monitor application health:
   - Check endpoint: http://localhost:3000/health
   - Interval: 30 seconds
   - Timeout: 10 seconds
   - Retries: 3

2. Add Docker labels for metadata:
   - maintainer
   - version
   - description

3. Handle environment variables securely:
   - Use ARG for build-time variables
   - Use ENV for runtime variables
   - Show example for NODE_ENV

4. Add security best practices:
   - Explicitly set file permissions
   - Remove unnecessary packages
   - Use specific version tags

5. Create a comprehensive .dockerignore file that excludes:
   - node_modules
   - npm-debug.log
   - .git
   - .env files
   - test files
   - documentation

6. Add comments explaining each security enhancement
7. Include commands for vulnerability scanning

```