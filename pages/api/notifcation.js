const apiUrl = process.env.NEXT_PUBLIC_EMAIL_ALERT_URL
export default async function handler(req, res) {
    await fetch(apiUrl + "/cron");
    res.status(200);
  }