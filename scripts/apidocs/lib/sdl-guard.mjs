import { buildSchema } from 'graphql';

export function checkSdl(text, previousSize) {
  if (!text || text.trim().length === 0) throw new Error('SDL is empty');
  let schema;
  try {
    schema = buildSchema(text, { assumeValidSDL: true });
  } catch (error) {
    throw new Error(`SDL does not parse: ${error.message}`);
  }
  if (!schema.getQueryType()) throw new Error('SDL has no Query type');
  if (previousSize > 0 && text.length < previousSize * 0.5) {
    throw new Error(`SDL shrank from ${previousSize} to ${text.length} bytes (more than 50%); refusing to publish`);
  }
}
