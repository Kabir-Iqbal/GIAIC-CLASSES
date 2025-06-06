import os
from agents import Agent, OpenAIChatCompletionsModel, RunConfig, Runner
from dotenv import load_dotenv
from openai import AsyncOpenAI

load_dotenv()

gemini_api_key = os.getenv("GEMINI_API_KEY")

# print(gemini_api_key)
# Check if the API key is present; if not, raise an error
if not gemini_api_key:
    raise ValueError("GEMINI_API_KEY is not set. Please ensure it is defined in your .env file.")

#Reference: https://ai.google.dev/gemini-api/docs/openai
external_client = AsyncOpenAI(
    api_key=gemini_api_key,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
)

model = OpenAIChatCompletionsModel(
    model="gemini-2.0-flash",
    openai_client=external_client
)

config = RunConfig(
    model=model,
    model_provider=external_client,
)


# Define the agent
writer = Agent(
    name="Writer",
    instructions="A writer agent that generates text based on prompts.",
)

# respond to the prompt using the agent
response = Runner.run_sync(
    writer,
    input="Write a short story about a robot learning to love.",
    run_config=config,
)

# Print the final output of the response
print(response.final_output)