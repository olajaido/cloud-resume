This project represents a cloud-based resume application that employs an array of AWS (Amazon Web Services) services to optimize its functionality. It harnesses the following AWS services:

Amazon S3 serves as the primary storage system for hosting the web page files. These files encompass the content and assets that compose the resume web page.

Amazon CloudFront operates as a Content Delivery Network (CDN) to ensure the efficient distribution of the web page content. It plays a crucial role in delivering the web page to users swiftly and with minimal latency.

Amazon DynamoDB functions as the data store for tracking the number of visitors who access the web page. DynamoDB is well-suited for this purpose due to its scalability and low-latency characteristics.

AWS Lambda plays a vital role in this setup by serving as an API layer for interactions with the DynamoDB database. It abstracts direct database access, providing a secure and controlled interface for data operations.

Amazon Route 53 is utilized to establish a customized Domain Name System (DNS) domain name. This domain name is configured to point to the CloudFront distribution, enabling users to access the resume web page using a user-friendly and recognizable domain name.

On the technical side, JavaScript is embedded within the web page to implement a visitor tracking mechanism. This JavaScript code counts the number of visitors who access the web page and dynamically displays this count on the webpage. The combination of these AWS services and technical implementations ensures a scalable, performant, and user-friendly resume application in the cloud.
