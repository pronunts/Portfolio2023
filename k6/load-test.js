import http from 'k6/http';
import { check, group, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '20s', target: 150 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
    { duration: '30s', target: 300 }, // stay at 200 users for 10 minutes
    { duration: '10s', target: 0 }, // ramp-down to 0 users
  ],
  thresholds: {
    'http_req_duration': ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },
};

const BASE_URL = 'http://localhost:4173';

export default function () {
    const res = http.get(`${BASE_URL}`);
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}
