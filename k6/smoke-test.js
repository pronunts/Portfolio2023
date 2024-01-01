import http from 'k6/http';
import { check, group, sleep, fail } from 'k6';

export const options = {
  vus: 1, // 1 user looping for 1 minute
  duration: '60s',

  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },
};

const BASE_URL = 'https://danieljsaldana.dev';

export default function () {
    const res = http.get(`${BASE_URL}`);
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}