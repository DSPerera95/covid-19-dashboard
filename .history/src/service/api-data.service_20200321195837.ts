export default async function CovidDt(){
    let response = await fetch(
        "https://www.hpb.health.gov.lk/api/get-current-statistical"
      );

    return await response.json();
};