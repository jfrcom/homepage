import { describe, expect, it } from "vitest";

import { expectWidgetConfigShape } from "test-utils/widget-config";

import widget from "./widget";

describe("lubelogger widget config", () => {
  it("exports a valid widget config", () => {
    expectWidgetConfigShape(widget);
  });

  it("configures LubeLogger API key authentication", () => {
    expect(widget.apiKeyHeader).toBe("x-api-key");
  });
});
