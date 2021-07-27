<?php

namespace App\Controller\Website;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class WebsiteController
 * @package App\Controller
 */
class SurveyResultsController extends AbstractController
{
    /**
     * @Route("/data/survey-results/{key}", name="index")
     * @return Response
     */
    public function index($key)
    {

//        $ch = curl_init();
//        curl_setopt($ch, CURLOPT_URL, "https://www.surveymonkey.com/results/" . $key . "/summary/data.js");
//        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//        $data = curl_exec($ch);
//        curl_close($ch);
////        dump($output);


        return $this->render('data/survey-results.html.twig', [
//            "data" => $data
        ]);

    }
}