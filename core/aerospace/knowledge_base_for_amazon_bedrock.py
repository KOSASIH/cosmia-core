import boto3

class KnowledgeBaseForAmazonBedrock:
    def __init__(self, aws_access_key_id, aws_secret_access_key):
        self.aws_access_key_id = aws_access_key_id
        self.aws_secret_access_key = aws_secret_access_key
        self.bedrock_client = boto3.client('bedrock', aws_access_key_id, aws_secret_access_key)

    def create_knowledge_base(self, knowledge_base_name, data_sources):
        response = self.bedrock_client.create_knowledge_base(
            KnowledgeBaseName=knowledge_base_name,
            DataSources=data_sources
        )
        return response['KnowledgeBase']

    def retrieve_knowledge_base(self, knowledge_base_id):
        response = self.bedrock_client.retrieve_knowledge_base(
            KnowledgeBaseId=knowledge_base_id
        )
        return response['KnowledgeBase']

    def update_knowledge_base(self, knowledge_base_id, updated_data_sources):
        response = self.bedrock_client.update_knowledge_base(
            KnowledgeBaseId=knowledge_base_id,
            UpdatedDataSources=updated_data_sources
        )
        return response['KnowledgeBase']
