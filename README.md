# itemku-translation

This repository is used to maintain translation file for itemku.com and already integrated with itemku AWS account to manage translation file automatically.

## Architecture Diagram
![itemku-translation-c2c](https://github.com/FIVEJACK/itemku-translation/assets/142006067/de9db781-1ec8-4ea2-bb60-5674478ff778)
This GitHub account is already integrated with the itemku AWS account via AWS CodePipeline. Any changes to the master branch will trigger CodePipeline to automatically run the CodeBuild project [itemku-translation-c2c-beta](https://ap-southeast-1.console.aws.amazon.com/codesuite/codebuild/958867226807/projects/itemku-translation-c2c-beta/history?region=ap-southeast-1&builds-meta=eyJmIjp7InRleHQiOiIifSwicyI6e30sIm4iOjIwLCJpIjowfQ). Within this CodeBuild process, several steps will occur:

1. The system will read the translation file from this repository and override the existing translation file with the newest one.
2. Once the process is complete, the system will invalidate the cache in the CloudFront distribution that serves this file.

this process will continue to trigger codebuild [itemku-translation-c2c-production](https://ap-southeast-1.console.aws.amazon.com/codesuite/codebuild/958867226807/projects/itemku-translation-c2c-production/history?region=ap-southeast-1&builds-meta=eyJmIjp7InRleHQiOiIifSwicyI6e30sIm4iOjIwLCJpIjowfQ) to update the production translation file.

Note: The itemku.com frontend app will request the translation file via CloudFront.
## Getting Started

To use this framework, follow these steps:

1. **Clone as Template**:

   ```bash
   git clone https://github.com/FIVEJACK/itemku-translation
   cd itemku-translation
   ```

2. Copy environment variables:

   ```bash
   cp .env.example .env
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

5. Run Script:

   ```bash
   yarn execute
   ```

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or submit a pull request. Update the documentation and README.md file as necessary.
