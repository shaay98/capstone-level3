import { GetCommand, PutCommand, ScanCommand, DeleteCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { ddbDocClient } from '../aws';

const TABLE_NAME = 'FoodMenu';

export async function createMenuItem(item) {
  const command = new PutCommand({
    TableName: TABLE_NAME,
    Item: item,
  });

  await ddbDocClient.send(command);
}

export async function getMenuItems() {
  const command = new ScanCommand({
    TableName: TABLE_NAME,
  });

  const result = await ddbDocClient.send(command);
  return result.Items;
}

export async function updateMenuItem(id, updates) {
  const command = new UpdateCommand({
    TableName: TABLE_NAME,
    Key: { id },
    UpdateExpression: 'set #n = :name, description = :desc, price = :price',
    ExpressionAttributeNames: {
      '#n': 'name',
    },
    ExpressionAttributeValues: {
      ':name': updates.name,
      ':desc': updates.description,
      ':price': updates.price,
    },
    ReturnValues: 'ALL_NEW',
  });

  const result = await ddbDocClient.send(command);
  return result.Attributes;
}

export async function deleteMenuItem(id) {
  const command = new DeleteCommand({
    TableName: TABLE_NAME,
    Key: { id },
  });

  await ddbDocClient.send(command);
}