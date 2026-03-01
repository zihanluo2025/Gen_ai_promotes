# Effective example prompts for generating architecture and design diagrams

## System architecture diagrams
### 1. Simple starting prompt
Create a system architecture diagram for an e-commerce platform with:

- React frontend hosted on Vercel

- Node.js REST API backend on AWS ECS

- PostgreSQL database on AWS RDS

- Redis cache for session management

- S3 for product images

Show the data flow from user request to database query


### 2. Detailed enterprise prompt
Design a microservices architecture for a food delivery platform with:

Services:

- User Service (authentication, profiles)

- Restaurant Service (menu management, availability)

- Order Service (order processing, status tracking)

- Payment Service (Stripe integration)

- Delivery Service (driver matching, route optimization)

- Notification Service (email, SMS, push notifications)

Infrastructure:

- API Gateway (Kong) at the entry point

- Services communicate via RabbitMQ message broker

- Each service has its own PostgreSQL database

- Shared Redis cluster for caching

- Elasticsearch for search functionality

- All services deployed on Kubernetes cluster

Show synchronous REST calls, asynchronous event flows, and external integrations

### 3. Cloud-specific architecture

Create an AWS cloud architecture diagram for a video streaming platform:

- CloudFront CDN for content delivery

- S3 buckets for video storage (original and transcoded)

- Lambda functions triggered by S3 events for video transcoding

- MediaConvert for video processing

- API Gateway + Lambda for backend APIs

- DynamoDB for user data and viewing history

- ElastiCache for session management

- Cognito for user authentication

- CloudWatch for monitoring and logs

Include VPC boundaries, public/private subnets, and security groups

## Network diagrams

### 1. Kubernetes architecture

Create a Kubernetes architecture diagram showing:

Cluster components:

- 3 Master nodes (control plane)

- 5 Worker nodes

On Master nodes:

- API Server

- etcd

- Controller Manager

- Scheduler

On Worker nodes:

- kubelet

- kube-proxy

- Container runtime (containerd)

Deployed applications:

- Frontend pods (3 replicas) behind LoadBalancer Service

- Backend pods (5 replicas) behind ClusterIP Service

- Background workers (2 replicas)

- Redis StatefulSet (3 replicas with persistent volumes)

- PostgreSQL managed externally (RDS)

Include:

- Ingress controller routing external traffic

- ConfigMaps and Secrets

- HorizontalPodAutoscaler for backend

- NetworkPolicy for pod-to-pod communication rules