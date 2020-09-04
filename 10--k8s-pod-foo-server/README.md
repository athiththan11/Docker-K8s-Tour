# Kubernetes Pod: Foo Server

This repo contains the `yaml` configuration developed to deploy a Pod for the `Foo` server in Kubernetes. The configurations uses and refers to the Docker image built and pushed in `02--foo-server-docker` step. Please find the `kubectl` commands used to deploy the configurations in the minikube environment.

> Please note that this repo contains a sample Pod configuration to up and run a container in Kubernetes. With the existing configurations, it is not possible to invoke any of the APIs that are exposed by the `Foo` server, becuase the communication from your local machine to the K8s cluster is not configured. Please follow the `11--k8s-pod-foo-server-nodeport` to deploy and access `Foo` server with NodePort configurations

## Kubectl Commands

### Apply

```sh
kubectl apply -f foo-server--pod.yaml
```

### Delete

```sh
kubectl delete -f foo-server--pod.yaml
```
