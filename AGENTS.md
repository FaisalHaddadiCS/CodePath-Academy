# Security Guidelines & Rules

- Never hardcode secrets; always use process.env.
- Never commit .env files or real credentials.
- Always use Prisma/parameterized queries; never use raw string concatenation for database queries.
- Never use `$queryRawUnsafe`.
- Always hash passwords with bcrypt; never store or log plaintext passwords.
- Always validate and type-check server input, even if client validation exists.
- Validate AI-generated structured data server-side before returning or persisting it.
- Always add route-specific rate limiting to public, authentication, and expensive AI endpoints.
- Never expose internal errors, stack traces, SQL/ORM details, paths, provider details, tokens, cookies, or secrets to clients.
- Always use HTTP-only auth cookies; set `secure` based on production HTTPS and use an appropriate SameSite policy.
- Never use wildcard CORS with credentialed requests.
- Require authentication and ownership checks for user-specific data.
- Do not log passwords, tokens, API keys, authorization headers, or cookies.
- Add or update security tests for any new endpoint or security-sensitive behavior.
