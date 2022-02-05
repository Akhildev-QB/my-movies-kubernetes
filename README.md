# Movies App

_This project is developed using express with kuberenetes support._

## Steps

1. [Install Docker](https://www.docker.com/products/docker-desktop)
2. [Install Kubectl](https://kubernetes.io/docs/tasks/tools)
3. [Install Virtualbox](https://minikube.sigs.k8s.io/docs/start)
4. [Install Minikube](https://www.virtualbox.org/wiki/Downloads)
5. Start Minikube `minikube start --driver=virtualbox`
6. Check Minikube status`minikube status`
7. Open Minikube dashboard `minikube dashboard`
8. Start App `kubectl apply -f=volume.yaml -f=deployment.yaml`
9. View App `minikube service movie-service `
10. Stop App `kubectl delete -f=volume.yaml -f=deployment.yaml`

## Endpoints

| Method | Endpoints       | Response                |
| ------ | --------------- | ----------------------- |
| GET    | {host}          | Home page movies server |
| GET    | {host}/food     | Lists all movies        |
| GET    | {host}/food/add | Insert a movie recipie  |

**Author: Akhildev MJ**
