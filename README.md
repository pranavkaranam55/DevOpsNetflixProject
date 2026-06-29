 Automated CI/CD Pipeline for Containerized Web Application with Monitoring

## Project Overview

This project demonstrates the implementation of a complete DevOps workflow for automating the build, deployment, and monitoring of a containerized web application. A Netflix Clone web application is used as the sample application to showcase how modern software development teams automate software delivery using Continuous Integration (CI), Continuous Deployment (CD), containerization, orchestration, and monitoring. The project integrates Jenkins, Docker, Kubernetes, Prometheus, and Grafana to eliminate manual deployment processes and improve software reliability, scalability, and observability.


# Project Working

The workflow of the project begins when a developer pushes the latest source code to the GitHub repository. Instead of manually downloading the source code and deploying the application, Jenkins automatically detects the latest changes and starts the CI/CD pipeline. The entire deployment process is defined inside the Jenkinsfile, which contains every stage required to build and deploy the application.

During the first stage, Jenkins checks out the latest source code from the GitHub repository. This ensures that the pipeline always works with the most recent version of the application. Once the source code is available, Jenkins initiates the build process by executing the pipeline stages sequentially.

The application is then containerized using Docker. Docker creates an isolated environment by packaging the application together with all the required libraries, runtime, and dependencies into a Docker image. This approach eliminates environment mismatch problems commonly referred to as the "Works on My Machine" issue, ensuring that the application behaves consistently across development, testing, and production environments.

After successfully creating the Docker image, Jenkins deploys the application by creating a Docker container from the generated image. Whenever a new version of the application is built, the previous container is automatically removed and replaced with the latest version. This enables automated deployment without requiring any manual intervention.

To manage the deployed application efficiently, Kubernetes is used as the container orchestration platform. Kubernetes is responsible for managing application containers, scheduling workloads, maintaining high availability, and handling deployment updates. It automatically creates Pods to host the application and continuously monitors their health. If a Pod fails, Kubernetes recreates it automatically to ensure uninterrupted service. Additionally, Kubernetes provides scalability by increasing or decreasing the number of application replicas based on workload requirements.

After deployment, monitoring becomes an essential component of the application lifecycle. Prometheus continuously collects infrastructure and application metrics from the running containers and the host system. It gathers important performance information such as CPU utilization, memory consumption, container status, network statistics, and other resource usage metrics. These metrics provide valuable insights into the health and performance of the deployed application.

Grafana is integrated with Prometheus to visualize the collected metrics through interactive dashboards. Instead of analyzing raw numerical values, system administrators and DevOps engineers can monitor application performance using graphs, charts, and real-time dashboards. This enables proactive monitoring, easier troubleshooting, and better decision-making regarding system performance and infrastructure scaling.

The entire workflow is fully automated through Jenkins, allowing developers to focus on application development rather than manual deployment activities. Every code update follows the same standardized deployment process, ensuring consistency, reducing deployment time, minimizing human error, and improving software quality.


# Technologies Used

## Jenkins

Jenkins serves as the automation server responsible for implementing the Continuous Integration and Continuous Deployment pipeline. It automatically retrieves the latest source code from GitHub, executes the pipeline defined in the Jenkinsfile, builds the Docker image, deploys the application, and automates the complete software delivery lifecycle. By automating repetitive deployment tasks, Jenkins significantly reduces manual effort and improves deployment consistency.



## Docker

Docker is used to containerize the application and package it together with all necessary dependencies. Containerization ensures that the application executes consistently regardless of the underlying operating system or infrastructure. Docker also simplifies dependency management, improves application portability, and eliminates environment-related deployment issues.


## Kubernetes

Kubernetes is responsible for orchestrating Docker containers in a production-like environment. It manages container deployment, load balancing, scaling, and self-healing. Kubernetes continuously monitors running Pods and automatically replaces failed instances, ensuring application availability and reliability even under changing workloads.


## Prometheus

Prometheus is the monitoring system used for collecting real-time infrastructure and container metrics. It continuously gathers information related to CPU usage, memory utilization, network activity, container health, and various system-level performance indicators. These metrics help identify bottlenecks, monitor application behavior, and support capacity planning.


## Grafana

Grafana provides a visualization layer for the metrics collected by Prometheus. It converts raw performance data into interactive dashboards that display graphs, gauges, and statistical information. Grafana enables real-time monitoring of system resources and application health, making it easier to detect anomalies, analyze trends, and maintain overall system stability.


# Workflow Summary

The developer commits the latest application code to the GitHub repository. Jenkins automatically detects the code changes and starts the CI/CD pipeline. The pipeline retrieves the latest source code, builds a Docker image, creates and deploys a Docker container, and manages the application deployment. Kubernetes orchestrates the deployed containers by handling scheduling, scaling, and high availability. Prometheus continuously collects system and application metrics, while Grafana visualizes these metrics through real-time dashboards, enabling continuous monitoring and performance analysis. This complete workflow automates software delivery while ensuring reliability, consistency, scalability, and observability throughout the application lifecycle.