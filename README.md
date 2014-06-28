## Spec
### Switching to Git
- Use of Git and Github is important for expansion and collaboration from the community and potential employees
- Foreseeable initial drawbacks to using Github include:
  - Exposure of database passwords, as the current system uses PHP with MySQL passwords listed as plaintext
  - Code propriety and risk of theft/out-competition
  - Security holes are open and exposed

### Solution
- Uses Github and maintains security:

| Frontend | Backend |
| -------- | ------- |
| Can be simple Javascript | Traditional MySQL and PHP |
| None/very few embedded PHP & MySQL calls (better for security) | Receives API calls |
| **Open** for forks and contributions through Github | **Secure** code that is developed privately and not shared |
  
### New structure
