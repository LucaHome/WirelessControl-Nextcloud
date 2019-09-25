<?php

namespace OCA\WirelessControl\Controller;

use OCA\WirelessControl\Entities\Area;
use OCA\WirelessControl\Services\AreaService;
use OCP\AppFramework\ApiController;
use OCP\IRequest;

class AreaApiController extends ApiController
{
	/** @var AreaService */
	private $service;

	use Response;

	/**
	 * @param string $appName
	 * @param IRequest $request
	 * @param AreaService $service
	 */
	public function __construct(string $appName, IRequest $request, AreaService $service)
	{
		parent::__construct($appName, $request);
		$this->service = $service;
	}

	/**
	 * @CORS
	 * @NoCSRFRequired
	 * @NoAdminRequired
	 */
	public function index()
	{
		return $this->generateResponse("success", function () {
			return $this->service->get();
		}, '');
	}

	/**
	 * @CORS
	 * @NoCSRFRequired
	 * @NoAdminRequired
	 *
	 * @param int $id
	 */
	public function show(int $id)
	{
		return $this->generateResponse("success", function () use ($id) {
			return $this->service->getById($id);
		}, '');
	}

	/**
	 * @CORS
	 * @NoCSRFRequired
	 * @NoAdminRequired
	 * 
	 * @param string name
	 * @param string filter
	 * @param int deletable
	 */
	public function create(string $name, string $filter, int $deletable)
	{
		$area = new Area();
		$area->id = -1;
		$area->name = $name;
		$area->filter = $filter;
		$area->deletable = $deletable;
		return $this->generateResponse("success", function () use ($area) {
			return $this->service->add($area);
		}, '');
	}

	/**
	 * @CORS
	 * @NoCSRFRequired
	 * @NoAdminRequired
	 * 
	 * @param int $id
	 * @param string name
	 * @param string filter
	 * @param int deletable
	 */
	public function update(int $id, string $name, string $filter, int $deletable)
	{
		$area = new Area();
		$area->id = $id;
		$area->name = $name;
		$area->filter = $filter;
		$area->deletable = $deletable;
		return $this->generateResponse("success", function () use ($area) {
			return $this->service->update($area);
		}, '');
	}

	/**
	 * @CORS
	 * @NoCSRFRequired
	 * @NoAdminRequired
	 * 
	 * @param int $id
	 */
	public function destroy(int $id)
	{
		return $this->generateResponse("success", function () use ($id) {
			return $this->service->delete($id);
		}, '');
	}
}
