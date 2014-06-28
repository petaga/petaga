Petaga
======
The code that makes Petaga tick.

## Spec
### Switching to Git
- Use of Git and Github is important for expansion and collaboration from the community and potential employees
- Foreseeable initial drawbacks to using Github include:
  - Exposure of database passwords, as the current system uses PHP with MySQL passwords listed as plaintext
  - Code propriety and risk of theft/out-competition
  - Security holes are open and exposed

### Solution
- Uses Github and maintains security:
- Frontend
  - Can be simple Javascript
  - None/very few embedded PHP & MySQL calls (better for security)
  - **Open** for forks and contributions through Github
- Backend
  - Traditional MySQL and PHP
  - Receives API calls
  - **Secure** code that is developed privately and not shared

