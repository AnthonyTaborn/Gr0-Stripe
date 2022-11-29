/* eslint @typescript-eslint/no-var-requires: "off" */
import { Box, ContextView, Inline } from "@stripe/ui-extension-sdk/ui";
import type { ExtensionContextValue } from "@stripe/ui-extension-sdk/context";

const invoiceItems = async () => {await stripe.invoiceItems.list({
  limit: 3,
});
};
console.log(invoiceItems);



const InvoiceDetailView = ({userContext, environment}: ExtensionContextValue) => {
  return (
    <ContextView
      title="Hello world"
      externalLink={{
        label: "View docs",
        href: "https://stripe.com/docs/stripe-apps",
      }}
    >
      <Box
        css={{
          background: "container",
          borderRadius: "medium",
          marginTop: "small" ,
          padding: "large",
          wordBreak: "break-all",
        }}>
        Edit{" "}
        <Inline css={{ fontFamily: "monospace" }}>src/views/InvoiceDetailView.tsx</Inline>{" "}
        and save to reload this view.
      </Box>
    </ContextView>
  );
};

export default InvoiceDetailView;
