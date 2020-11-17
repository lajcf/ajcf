import { GraphQLClient } from "graphql-request";
import { getSdk } from "../../types/types";

const graphcmsClient = new GraphQLClient(process.env.GRAPHCMS_URL!, {
  headers: {
    authorization:
      "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MDU0NTQyMTcsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NraDllOWRoaDJ1YzQwMXc3ZjFpODVvZzYvbWFzdGVyIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZDhlYjZjMWUtMzk3Mi00YzViLTlhOWQtOTJiOTFlY2YxN2VhIiwianRpIjoiY2toajl6bTl6d2dmajAxeXhiY3ByMGtxZiJ9.fDKFaX3Aknm5NzHpamqStnb3pocDcYrrb3au6BsWnT-OBSQg_OS-S1FuL-9-mojQDhWeWAbEZ1K8-_MIERpLLbGvP3WgxqCo_J5fzp1DCiyiuWSh7SeONIRly-QJ3eav7Wc9MtvaRbdeI5akT0nyCBITYxAcTOz52tWNs8xPoNa55X1Rl543FJTQUGU66K650LtJvzeglY5qu-Z2VG7QKlXruHNsiN3AyS66scXAtKkoatA6tRFQs_Zy66sSn9fdJC2xZXuocdsLOLpD2HUq5SxQgIV4rpL56jbcf3cSbkYoKc-mktoNLw2jA-JXSpMLdpXkn8_p7Qso3lpA6pg8eZb5NpXinO83bncC8Vm74kTvhW5vrzd5bSTrkC9uyJnxHVRa8euHgj2VvMThXTmYVhfkryvdoS5g9G9orEHwgfCNYLG5Ht3AfJVTnaNz-NeYWfmjM27f0176Xu9zatxwN-YSEqBYeqdmaoRWBp9CMY7oUcl_nlSMSi74uRXG1PwaBKeu6lfP8LQ9iamlVblTjhG--zJKRdzCxgM7pJnjyOCEUh7ZXJWNNQ_I4k4Io5cZhlkKmzBzQQ2c8xBJ-4X9qNiao_n-ql2lLdyAdb0z5mVXdv5QDhyGFn-JxmbFpt21FSiDTxeoCmOeOJ0ImbwlMOJfn0J43OAT6-jLVxfawZ8",
  },
});
export const graphqlClient = getSdk(graphcmsClient);

/* export const graphqlRequest = async <TData = any, TVariables = Record<string, any>>(
  operation: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables
): Promise<TData> => {
  return graphcmsClient.request(operation, variables);
}; */
