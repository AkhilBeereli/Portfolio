import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-10 font-sans">
      <header className="mb-10">
        <h1 className="text-4xl font-bold">Akhil Beereli</h1>
        <p className="text-lg text-gray-600">Cloud & DevOps Engineer</p>
        <p className="mt-2">Building secure, scalable infrastructure with AWS, Kubernetes, and CI/CD automation.</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I'm an experienced AWS & DevOps Engineer with a focus on infrastructure automation, CI/CD pipelines, and cloud-native solutions. I've designed and managed production-grade environments on AWS, automated deployments using GitHub Actions and Jenkins, and containerized applications with Docker and Kubernetes.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="mb-6">
          <h3 className="text-xl font-bold">AWS DevOps Engineer</h3>
          <p className="text-sm text-gray-600">University of the Pacific, California, USA | Aug 2023 – Dec 2023</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Automated infrastructure with Terraform & Python, reducing manual ops by 30%.</li>
            <li>Built CI/CD pipelines with CodePipeline, Jenkins, and GitLab CI.</li>
            <li>Containerized and deployed apps to ECS & EKS using Docker & Helm.</li>
            <li>Configured monitoring with CloudWatch, Prometheus, and ELK stack.</li>
            <li>Ensured cloud security via IAM, encryption, and vulnerability scanning.</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Kubernetes GitOps Deployment:</strong> Deployed microservices using ArgoCD, Helm, and EKS.</li>
          <li><strong>Serverless Alert System:</strong> Built a Lambda + SNS-based monitoring alerting system for EC2 metrics.</li>
          <li><strong>Multi-region S3 Backup:</strong> Automated cross-region backups and DR testing with Python and AWS CLI.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>AWS Certified Solutions Architect – Associate</li>
          <li>AWS Certified DevOps Engineer – Professional</li>
        </ul>
      </section>

      <footer className="pt-10 border-t text-sm text-gray-500">
        <p>Connect with me: <a href="https://www.linkedin.com/in/akhilbeereli" className="text-blue-600">LinkedIn</a> | <a href="https://github.com/akhilbeereli" className="text-blue-600">GitHub</a></p>
        <p>Email: akhil@example.com</p>
      </footer>
    </div>
  );
}
