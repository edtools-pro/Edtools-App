import "dotenv/config";
import * as Joi from "joi";

interface EnvVars {
  REACT_APP_OPENAI_KEY: string;
  REACT_APP_ASSISTANT_ID: string;
  REACT_APP_AVATAR_API: string;
  REACT_APP_API: string;
  REACT_APP_AUTH_TOKEN: string;
  REACT_APP_BEARER: string;
}

const envShema = Joi.object({
  REACT_APP_OPENAI_KEY: Joi.string().required(),
  REACT_APP_ASSISTANT_ID: Joi.string().required(),
  REACT_APP_AVATAR_API: Joi.string().uri().required(),
  REACT_APP_API: Joi.string().uri().required(),
  REACT_APP_AUTH_TOKEN: Joi.string().required(),
  REACT_APP_BEARER: Joi.string().required(),
}).unknown(true);

const { error, value } = envShema.validate({ ...process.env });
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}
const envVars: EnvVars = value;

export const envs = {
  openaiKey: envVars.REACT_APP_OPENAI_KEY,
  assistantId: envVars.REACT_APP_ASSISTANT_ID,
  avatarApi: envVars.REACT_APP_AVATAR_API,
  api: envVars.REACT_APP_API,
  authToken: envVars.REACT_APP_AUTH_TOKEN,
  bearer: envVars.REACT_APP_BEARER,
};
