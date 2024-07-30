import boto3

class LambdaFunction:
    def __init__(self, function_name, function_arn):
        self.function_name = function_name
        self.function_arn = function_arn
        self.lambda_client = boto3.client('lambda')

    def invoke(self, payload):
        response = self.lambda_client.invoke(
            FunctionName=self.function_name,
            Payload=payload
        )
        return response['Payload']
