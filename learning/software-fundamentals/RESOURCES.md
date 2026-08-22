# Software Fundamentals Resources

## Knowledge

- [Microsoft Learn: Processes and Threads](https://learn.microsoft.com/en-us/windows/win32/procthread/processes-and-threads)
  Official Windows documentation. Use for: the distinction between a program, a running process, threads, and the operating-system resources attached to execution.

- [Node.js: Introduction to Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
  Official Node.js learning material. Use for: understanding Node.js as a JavaScript runtime environment, V8 outside the browser, the single-process model, and asynchronous I/O at a conceptual level.

- [Node.js API: Process](https://nodejs.org/api/process.html)
  Official Node.js API documentation. Use for: grounding the idea that a Node application has a current operating-system process with its own environment, executable path, lifetime, and resources.

- [MDN: JavaScript execution model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop)
  High-quality platform reference maintained by Mozilla and contributors. Use for: distinguishing the JavaScript engine from its host/runtime environment and, later, for event-loop and asynchronous-execution concepts.

- [RFC 9110: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html)
  Internet standard for HTTP semantics. Use for: client/server, request/response, stateless interaction, methods, responses, and the protocol boundary between software components.

- [PostgreSQL Documentation: Transactions](https://www.postgresql.org/docs/current/tutorial-transactions.html)
  Official PostgreSQL documentation. Use for: state, persistence, atomicity, visibility of intermediate state, and why databases need transactions.

- [Docker Docs: What is a container?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/)
  Official Docker concept documentation. Use for: processes, isolation, runtime environments, deployment boundaries, and why containers are not the same as virtual machines.

## Wisdom (Communities)

No community is required for the early fundamentals course. The course is primarily conceptual, and high-trust primary documentation is preferred over community consensus. Add a community later only when the mission reaches questions that genuinely require practitioner judgement.

## Gaps

- A high-trust, beginner-friendly architecture source that explains component boundaries and trade-offs without assuming code-reading ability.
- A similarly beginner-friendly primary source on deployment/runtime boundaries that is less vendor-specific than Docker documentation.
