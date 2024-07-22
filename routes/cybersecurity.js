import express from 'express';
import * as OWASP from 'owasp-password-strength-test';

const router = express.Router();

router.post('/password-strength-test', (req, res) => {
  const { password } = req.body;
  const result = OWASP.test(password);
  res.json({ strength: result.score });
});

router.post('/vulnerability-scan', async (req, res) => {
  const { url } = req.body;
  const scanner = new OWASP.Scanner();
  const results = await scanner.scan(url);
  res.json({ vulnerabilities: results });
});

export default router;
