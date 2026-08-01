// Your "Context" tab should look like this
const modifier = (text) => {
  const original = typeof text === "string" && text.length ? text : "\u200B";

  try {
    const result = MCPCollectionRun("context", original);
    return (
      result &&
      typeof result === "object" &&
      typeof result.text === "string" &&
      result.text.length
    ) ? result : { text: original };
  } catch (error) {
    log("MCP context error:", error);
    return { text: original };
  }
}

modifier(text)
