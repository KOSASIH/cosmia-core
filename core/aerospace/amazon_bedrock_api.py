import boto3

class AmazonBedrockAPI:
    def __init__(self, aws_access_key_id, aws_secret_access_key):
        self.aws_access_key_id = aws_access_key_id
        self.aws_secret_access_key = aws_secret_access_key
        self.bedrock_client = boto3.client('bedrock', aws_access_key_id, aws_secret_access_key)

    def list_foundation_models(self):
        response = self.bedrock_client.list_foundation_models()
        return response['FoundationModels']

    def create_agent(self, foundation_model_id, enterprise_systems, knowledge_bases, lambda_functions):
        response = self.bedrock_client.create_agent(
            FoundationModelId=foundation_model_id,
            EnterpriseSystems=enterprise_systems,
            KnowledgeBases=knowledge_bases,
            LambdaFunctions=lambda_functions
        )
        return response['Agent']

    def fine_tune_model(self, foundation_model_id, labeled_dataset):
        response = self.bedrock_client.fine_tune_model(
            FoundationModelId=foundation_model_id,
            LabeledDataset=labeled_dataset
        )
        return response['FineTunedModel']

    def retrieve_knowledge_base(self, knowledge_base_id):
        response = self.bedrock_client.retrieve_knowledge_base(
            KnowledgeBaseId=knowledge_base_id
        )
        return response['KnowledgeBase']
